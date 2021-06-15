import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../domain/types";

type AddBooksAction = PayloadAction<Book[]>;
type UpdateBookAction = PayloadAction<Book>;

const initialState: { byId: { [isbn: string]: Book } } = {
  byId: {},
};

export const fetchBooks = createAsyncThunk<Book[], void>(
  "books/fetchBooks",
  async () => {
    const response = await fetch("http://localhost:4730/books");
    const books = await response.json();

    return books;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks(state, action: AddBooksAction) {
      state.byId = action.payload.reduce(
        (allBooks, book) => {
          if (state.byId[book.isbn]) {
            return allBooks; // don’t overwrite books we already have
          }
          return {
            ...allBooks,
            [book.isbn]: book,
          };
        },
        { ...state.byId }
      );
    },
    updateBook(state, action: UpdateBookAction) {
      state.byId[action.payload.isbn] = {
        ...state.byId[action.payload.isbn],
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.byId = action.payload.reduce(
        (allBooks, book) => {
          if (state.byId[book.isbn]) {
            return allBooks; // don’t overwrite books we already have
          }
          return {
            ...allBooks,
            [book.isbn]: book,
          };
        },
        { ...state.byId }
      );
    });
  },
});

export const { addBooks, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
