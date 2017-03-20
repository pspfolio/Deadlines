import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import { ID_TOKEN, baseApiUrl } from './constants';

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
  clearIdToken();
  browserHistory.replace('/');
}

export function getToken() {
  let token = localStorage.getItem(ID_TOKEN);
  return token;
}

export function setToken(token) {
  localStorage.setItem(ID_TOKEN, token);
  localStorage.setItem('token_added', Date.now());
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
    if(response.ok) {
      return response.json();
    }
  })
}

function getTokenAdded() {
  const result = localStorage.getItem('token_added');
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
  console.log("refreshing now!!!!")
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

// TODO parametrinä id, jolla voidaan poistaa paskat
function clearIdToken() {
  localStorage.removeItem(ID_TOKEN);
}
