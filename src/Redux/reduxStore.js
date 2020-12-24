// const { createStore, combineReducers } = require("redux");
import profilePageReducer from "./profilePageReducer"
import dialoguesPageReducer from "./dialoguesPageReducer"
import authReducer from "./authReducer"
import usersReducer from "./usersReducer"
import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let redusers = combineReducers({
    profilePage:profilePageReducer,
    dialoguesPage:dialoguesPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(  applyMiddleware(thunkMiddleware)));

// let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
