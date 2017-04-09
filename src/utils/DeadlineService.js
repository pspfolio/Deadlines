import { getToken } from './AuthService';
import { handleFetch } from './FetchService';
import { baseApiUrl } from './constants';

export const loadDeadlines = () => {
  return handleFetch(`${baseApiUrl}/project/list`, getToken())
                    .then((response) => response.json());
}

export const addDeadline = (deadline) => {
  return handleFetch(`${baseApiUrl}/project`, getToken(), {
    method: 'POST',
    body: JSON.stringify(deadline)
  }).then((response) => response.json())
}