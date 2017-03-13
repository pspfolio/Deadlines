import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper';
import { ID_TOKEN, baseApiUrl } from './constants';

export function login(username, password) {
  return doLogin('auth/token', { username, password });
}

export function isAuthenticated() {
  var token = getToken();
  console.log("onko token expired", isTokenExpired(token));
  return token ? !isTokenExpired(token) : false;
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

export function getToken() {
  return localStorage.getItem(ID_TOKEN);
}

export function setToken(token) {
  localStorage.setItem(ID_TOKEN, token);
}

export function handleFetch(url, options) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if(isAuthenticated()) {
    headers['Authorization'] = `Bearer ${getToken()}`
  }

  return fetch(url, { headers, ...options }).then(response => {
    if(response.ok) {
      return response.json();
    }
  })
}

function doLogin(endpoint, user) {
  return handleFetch(`${baseApiUrl}/${ endpoint }`, {
    method: 'POST',
    body: JSON.stringify(user)
  })
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN);
}
