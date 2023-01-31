// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import commonSaga from "./Saga/commonSaga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: rootReducer,
	middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(commonSaga);
export default store;
