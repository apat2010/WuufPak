import axios from 'axios';

// const id = window.location.pathname;
const id = new URLSearchParams(window.location.search).get('profileId');
// search.split('?propertyID=')[1];

const instance = axios.create({
  baseURL: `/api/dogs/${id}/feed`,
});

export default instance;
