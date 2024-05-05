import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import SomeReducer from './reducers/SomeReducer'; // Assuming your reducer file is named SomeReducer.js

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  someReducer: SomeReducer, // Assign the reducer to a key in the state
  // Add more reducers here if needed
});

// Create the Redux store with combined reducers and Redux DevTools extension
const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
