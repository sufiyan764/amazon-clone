import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-baa15.cloudfunctions.net/api' // the api (cloud function) URL
});

export default instance;

// https://us-central1-clone-baa15.cloudfunctions.net/api
// http://localhost:5001/clone-baa15/us-central1/api
