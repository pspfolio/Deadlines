import { browserHistory } from 'react-router';
import { isTokenExpired, getTokenExpirationDate } from './jwtHelper';
import { ID_TOKEN, baseApiUrl } from './constants';

export function login(username, password) {
  return doLogin('auth/token', { username, password });
}

export function isAuthenticated() {
  const token = getToken();
  return token ? !isTokenExpired(token) : false;
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

export function getToken() {
  const token = localStorage.getItem(ID_TOKEN);
  if(shouldRefreshToken(token)) {
    console.log("REFRESHTOKEN!");
  }

  return token;
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

function shouldRefreshToken(token) {
  const one_hour = 60 * 60 * 1000;
  const expDate = getTokenExpirationDate(token);
  const result = (new Date() - expDate) > one_hour;
  console.log(result);
  return (new Date() - expDate) > one_hour;
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
