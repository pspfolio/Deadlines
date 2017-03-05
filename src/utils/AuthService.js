import { browserHistory } from 'react-router';
const ID_TOKEN = 'id_token';

export function handleLogin(username, password) {
  setToken("eyJhbGciOiJIUzI1NiIsI.eyJpc3MiOiJodHRwczotcGxlL.mFrs3Zo8eaSNcxiNfvRh9dqKP4F1cB");
  browserHistory.replace('/dashboard');
}

export function requireAuth() {
  if(!isLoggedIn()) {
    browserHistory.replace({pathname: '/login'});
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

function setToken(token) {
  localStorage.setItem(ID_TOKEN, token);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN);
}
