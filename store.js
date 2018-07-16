import {
  createStore,
  applyMiddleware
} from 'redux';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {appReducer } from './src/reducers';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});


const store = createStore(
  appReducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
);

export {store};
