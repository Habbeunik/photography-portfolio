import { combineReducers } from 'redux';

import session from './sessionReducer';
import drawer from './drawer';

const appReducer = combineReducers({
  session,
  drawer
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

export * from './sessionReducer';
