import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducers from "./reducers/authReducers";

const reducers = combineReducers({
  auth: authReducers,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
