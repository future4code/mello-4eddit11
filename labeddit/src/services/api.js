import axios from 'axios';

const conection = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/',
  headers: { 'content-type': 'application/json' },
});

export function Get(url, key) {
  return conection.get(url, key);
}

export function Post(url, data) {
  return conection.post(url, data);
}

export function Put(url, data) {
  return conection.put(url, data);
}
