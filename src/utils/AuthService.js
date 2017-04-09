import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import { handleFetch } from './FetchService';
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
  handleFetch(`${baseApiUrl}/${endpoint}`, getToken()).then((result) => {
    setToken(result.token);
  }).then((response) => response.json())
}

function doLogin(endpoint, user) {
  return handleFetch(`${baseApiUrl}/${ endpoint }`, null, {
    method: 'POST',
    body: JSON.stringify(user)
  }).then((response) => response.json())
}

function clearLocalstorageById(ID) {
  localStorage.removeItem(ID);
}
