import {
  createStore,
  applyMiddleware
} from 'redux';

import axios from 'axios';
import axiosMiddleware, {multiClientMiddleware} from 'redux-axios-middleware';
import {appReducer } from './src/reducers';

// const client = axios.create({
//   baseURL: 'https://api.github.com',
//   responseType: 'json'
// });

// const client = axios.create({
//   baseURL: 'http://192.168.35.15:3000',
//   responseType: 'json'
// });

const client = {
  "test": {
    client: axios.create({
      baseURL: 'https://api.github.com',
      responseType: 'json'
    })
  },
  "local": {
    client: axios.create({
      baseURL: 'http://localhost:3000',
      responseType: 'json'
    })
  }
};

const store = createStore(
  appReducer,
  applyMiddleware(
    // axiosMiddleware(client)
    multiClientMiddleware(client)
  )
);

export {store};
