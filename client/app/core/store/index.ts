import * as createLogger from 'redux-logger';

import { IAppState, rootReducer, deimmutify, reimmutify } from './store';
import { ISession } from './session';

import persistState from 'redux-localstorage';

export {
  IAppState,
  ISession,
  rootReducer,
  reimmutify,
};

export let middleware = [];
export let enhancers = [
  persistState(/* */)
];

middleware.push(
    createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: deimmutify,
}));