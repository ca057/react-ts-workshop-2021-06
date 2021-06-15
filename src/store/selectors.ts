import { RootState } from "./index";

export const getBooks = (state: RootState) => state.books.books;

export const getBook = (isbn: string) => (state: RootState) =>
  state.books.books.find((book) => book.isbn === isbn);
