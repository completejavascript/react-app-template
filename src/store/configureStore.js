import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import combineReducers from './combineReducers';

const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.log('prev state', store.getState());
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const configureStore = preloadedState => {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware)
  }
  middlewares.push(thunkMiddleware);
  
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return createStore(combineReducers, preloadedState, composedEnhancers);
};

export default configureStore;
