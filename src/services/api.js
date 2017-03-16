import axios from 'axios';

const API_ROOT = 'https://api.github.com/'

function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return axios.get(fullUrl)
    .then(response => ({response}))
    .catch(
      error => ({error: error.message || 'Something bad happened'})
    )

}


// api services
export const fetchUser = login => callApi(`users/${login}`)