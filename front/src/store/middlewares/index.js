import { applyMiddleware } from 'redux';

import routesMW from './routes';
import signup from './signup';
import auth from './auth';


export default applyMiddleware(
  routesMW,
  signup,
  auth,
);
