import { browserHistory } from 'react-router';

const ID_TOKEN = 'id_token';

export function handleLogin(username, password) {
  setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
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

function setToken(token) {
  localStorage.setItem(ID_TOKEN, token);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN);
}
