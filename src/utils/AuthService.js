

export function handleLogin(username, password) {
  setToken("eyJhbGciOiJIUzI1NiIsI.eyJpc3MiOiJodHRwczotcGxlL.mFrs3Zo8eaSNcxiNfvRh9dqKP4F1cB");
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken;
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

function setToken(token) {
  localStorage.setItem('id_token', token);
}

export function getIdToken() {
  return localStorage.getItem('id_token');
}
