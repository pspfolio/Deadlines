import jwtDecode from 'jwt-decode';

export function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);

  if(expirationDate == null) {
    return false;
  }

  return !(expirationDate > new Date())
}

function getTokenExpirationDate(token) {
  const decodedToken = jwtDecode(token);

  if(!decodedToken.exp) {
    return null;
  }

  const date = new Date(0);
  console.log('decodedexp', decodedToken.exp);
  date.setUTCSeconds(decodedToken.exp);
  return date;
}