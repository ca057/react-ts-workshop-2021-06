import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  books: (state = []) => state,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
