import { browserHistory } from 'react-router';
const ID_TOKEN = 'id_token';
const baseApiUrl = 'http://localhost:56542/api/';

export function login(username, password) {
  return doLogin('auth/token', { username, password });
}

export function isAuthenticated() {
  const idToken = getToken();
  return !!idToken;
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

function doLogin(endpoint, user) {
  return handleFetch(`${baseApiUrl}${ endpoint }`, {
    method: 'POST',
    body: JSON.stringify(user)
  })
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN);
}

function handleFetch(url, options) {
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
