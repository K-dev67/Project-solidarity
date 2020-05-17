import { applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import routesMW from './routes';
import signup from './signup';
import auth from './auth';
import webSocketMW from './websocket';


export default applyMiddleware(
  thunk,
  signup,
  auth,
  webSocketMW,
  routesMW,
);
