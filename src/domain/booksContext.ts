import React, { useContext, useReducer } from "react";
import { Book } from "./types";

type BooksContextValue = {
  addBooks: (books: Book[]) => void;
  updateBook: (book: Book) => void;
  getBook: (isbn: string) => Book | null;
  getBooks: () => Book[];
};

const BooksContext = React.createContext<BooksContextValue>({
  addBooks(books: Book[]) {},
  getBook(isbn: string): Book | null {
    return null;
  },
  getBooks() {
    return [];
  },
  updateBook(book: Book) {},
});

type AddBooksAction = { type: "addBooks"; books: Book[] };
const addBooksAction = (books: Book[]): AddBooksAction => ({
  type: "addBooks",
  books,
});

type UpdateBookAction = { type: "updateBook"; book: Book };
const updateBookAction = (book: Book): UpdateBookAction => ({
  type: "updateBook",
  book,
});

type BooksState = {
  books: { [isbn: string]: Book };
};
type BooksActions = AddBooksAction | UpdateBookAction;
const booksReducer = (state: BooksState, action: BooksActions) => {
  switch (action.type) {
    case "addBooks": {
      const books = action.books.reduce(
        (allBooks, book) => {
          if (allBooks[book.isbn]) {
            return allBooks; // don’t overwrite books we already have
          }
          return {
            ...allBooks,
            [book.isbn]: book,
          };
        },
        { ...state.books }
      );

      return {
        ...state,
        books,
      };
    }
    case "updateBook": {
      const { isbn } = action.book;
      return {
        ...state,
        books: {
          ...state.books,
          [isbn]: {
            ...state.books[isbn],
            ...action.book,
          },
        },
      };
    }
  }
};

export const useBooksContextValue = (): BooksContextValue => {
  const [{ books }, dispatch] = useReducer(booksReducer, { books: {} });

  const addBooks = (booksToAdd: Book[]) => dispatch(addBooksAction(booksToAdd));
  const updateBook = (book: Book) => dispatch(updateBookAction(book));

  const getBook = (isbn: string) => books[isbn] ?? null;

  const getBooks = () => Object.values(books);

  return {
    addBooks,
    updateBook,
    getBook,
    getBooks,
  };
};

export const useBooksSelectors = (): Pick<
  BooksContextValue,
  "getBook" | "getBooks"
> => {
  const { getBook, getBooks } = useContext(BooksContext);

  return {
    getBook,
    getBooks,
  };
};

export const useBooksActions = (): Pick<
  BooksContextValue,
  "addBooks" | "updateBook"
> => {
  const { addBooks, updateBook } = useContext(BooksContext);

  return { addBooks, updateBook };
};

export default BooksContext;
