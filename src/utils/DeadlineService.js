import { getToken } from './AuthService';
import { handleFetch } from './FetchService';
import { baseApiUrl } from './constants';

export const loadDeadline = (id) => handleFetch(`${baseApiUrl}/project/${id}`, getToken()).then(toJson);

export const loadDeadlines = () => handleFetch(`${baseApiUrl}/project/list`, getToken()).then(toJson);

export const updateDeadline = (deadline) => handleFetch(`${baseApiUrl}/project/${this.state.id}`, getToken(), {
  method: 'PUT',
  body: JSON.stringify(deadline)
}).then(toJson)

export const addDeadline = (deadline) => {
  return handleFetch(`${baseApiUrl}/project`, getToken(), {
    method: 'POST',
    body: JSON.stringify(deadline)
  }).then((response) => response.json())
}

function toJson(response) {
  return response.json()
}