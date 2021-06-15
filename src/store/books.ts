import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../domain/types";

interface BooksState {
  books: Book[];
}

const initialState: BooksState = { books: [] };

type AddBooksAction = PayloadAction<Book[]>;

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks(state, action: AddBooksAction) {
      return {
        ...state, // shallow copy of all other state properties
        books: action.payload,
      };
    },
  },
});

export const { addBooks } = booksSlice.actions;

export default booksSlice.reducer;
