import { RootState } from "./index";

export const getBooks = () => (state: RootState) =>
  Object.values(state.books.byId);

export const getBook = (isbn: string) => (state: RootState) =>
  state.books.byId[isbn] || null;
