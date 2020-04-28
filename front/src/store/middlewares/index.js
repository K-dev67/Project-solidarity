import { applyMiddleware } from 'redux';

import routesMW from './routes';
import signup from './signup';

export default applyMiddleware(
  routesMW,
  signup
);
