import { configureStore, combineReducers } from "@reduxjs/toolkit";
import books from "./books";

const rootReducer = combineReducers({
  books,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
