import { applyMiddleware } from 'redux';

import routesMW from './routes';
import signup from './signup';
import auth from './auth';
import webSocketMW from './websocket';


export default applyMiddleware(

  signup,
  auth,
  webSocketMW,
  routesMW,
);
