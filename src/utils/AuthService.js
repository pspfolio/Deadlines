import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

const ID_TOKEN = 'id_token';

export function handleLogin(username, password) {
  setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
  browserHistory.replace('/dashboard');
}

export function requireAuth() {
  if(!isLoggedIn()) {
    browserHistory.replace({ pathname: '/login' });
  }
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken;
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN);
}

export function getPayload() {
  console.log("GETPAYLOAD IS LOGGED IN: ");
  if(isLoggedIn()) {
    var payload = jwtDecode(getIdToken());
    console.log("payload", payload)
    return payload;
  }

  return  {};
}

function setToken(token) {
  localStorage.setItem(ID_TOKEN, token);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN);
}
