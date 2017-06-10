import { getToken } from './AuthService';
import { handleFetch } from './FetchService';
import { baseApiUrl } from './constants';

const toJson = (response) => response.json()

const loadDeadlines = () => handleFetch(`${baseApiUrl}/project/list`, getToken()).then(toJson);

export const loadDeadline = (id) => handleFetch(`${baseApiUrl}/project/${id}`, getToken()).then(toJson);

export const loadDeadlinesByCount = (count) => loadDeadlines().then(data => data.slice(0, count));

export const loadDeadlinesByFilter = (filter) => loadDeadlines().then(data => filterData(data, filter));


export const updateDeadline = (deadline) => handleFetch(`${baseApiUrl}/project/${deadline.id}`, getToken(), {
  method: 'PUT',
  body: JSON.stringify(deadline)
})

export const addDeadline = (deadline) => {
  return handleFetch(`${baseApiUrl}/project`, getToken(), {
    method: 'POST',
    body: JSON.stringify(deadline)
  }).then((response) => response.json())
}

function filterData(data, filter) {
  switch(filter) {
    case 'Active' :
      return data.filter(item => !item.closed)
    case 'Completed':
      return data.filter(item => item.closed)
    default:
      return data;
  }
}

