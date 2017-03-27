import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import { TOKEN, TOKEN_ADDED, baseApiUrl } from './constants';

export function login(username, password) {
  return doLogin('auth/token', { username, password });
}

export function isAuthenticated() {
  const token = getToken();
  if(token && shouldRefreshToken()) {
    refreshToken('auth/refresh')
  }
  return token ? !isTokenExpired(token) : false;
}

export function logout() {
  clearLocalstorageById(TOKEN);
  clearLocalstorageById(TOKEN_ADDED);
  browserHistory.replace('/');
}

export function getToken() {
  let token = localStorage.getItem(TOKEN);
  return token;
}

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(TOKEN_ADDED, Date.now());
}

export function handleFetch(url, options) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if(getToken()) {
    headers['Authorization'] = `Bearer ${getToken()}`
  }

  return fetch(url, { headers, ...options }).then(response => {
    if(response.ok && response.status !== 204) {
      return response.json();
    } else if(response.ok && response.status === 204) {
      return response;
    }
  })
}

function getTokenAdded() {
  const result = localStorage.getItem(TOKEN_ADDED);
  return result
}

function shouldRefreshToken() {
  const one_hour = 60 * 60 * 1000;
  const added = getTokenAdded();

  if(!added) {
    return false;
  } 
  return (Date.now() - added) > one_hour;
}

function refreshToken(endpoint) {
  handleFetch(`${baseApiUrl}/${endpoint}`).then((result) => {
    setToken(result.token);
  })
}

function doLogin(endpoint, user) {
  return handleFetch(`${baseApiUrl}/${ endpoint }`, {
    method: 'POST',
    body: JSON.stringify(user)
  })
}

function clearLocalstorageById(ID) {
  localStorage.removeItem(ID);
}
