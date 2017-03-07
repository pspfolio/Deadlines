import { browserHistory } from 'react-router';

const ID_TOKEN = 'id_token';

export function handleLogin(username, password) {
  return doLogin('token', { username, password });
  //setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
  browserHistory.replace('/dashboard');
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

function doLogin(endpoint, user) {
  return this.handleFetch(`http://localhost:56542/api/auth/${ endpoint }`, {
    method: 'POST',
    body: JSON.stringify(user)
  })
}

function setToken(token) {
  localStorage.setItem(ID_TOKEN, token);
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

  return fetch(url, { headers, ...options }).then(response => response.json());
}
