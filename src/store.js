import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import userReducer from './reducers/userSlice';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    user: userReducer
});

const sageMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sageMiddleware)
);

sageMiddleware.run(watcherSaga);


export default store;