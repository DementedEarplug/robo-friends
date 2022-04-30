import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

//Empty state
const initialState = {};

// Add all your middleware into this array
const middleWare = [thunk];

// pass reducer, initial state and middleware. In this case pass it to the devtools extension.
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;