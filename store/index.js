import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import groupReducer from "../store/reducers/groupReducers";

const store = createStore(groupReducer, applyMiddleware(thunk));

export default store;
