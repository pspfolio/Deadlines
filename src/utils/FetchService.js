
export function handleFetch(url, token, options) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return fetch(url, { headers, ...options })
}

/*
.then(response => {
        if (response.ok && response.status !== 204) {
            return response.json();
        } else if (response.ok && response.status === 204) {
            return response;
        }
    })
*/