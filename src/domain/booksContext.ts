import React, { useContext, useState } from "react";
import { Book } from "./types";

type BooksContextValue = {
  addBooks: (books: Book[]) => void;
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
});

export const useBooksContextValue = (): BooksContextValue => {
  const [books, setBooks] = useState<{ [isbn: string]: Book }>({});

  const addBooks = (booksToAdd: Book[]) => {
    const booksAsMap = booksToAdd.reduce(
      (allBooks, book) => ({ ...allBooks, [book.isbn]: book }),
      { ...books }
    );

    setBooks(booksAsMap);
  };

  const getBook = (isbn: string) => books[isbn] ?? null;

  const getBooks = () => Object.values(books);

  return {
    addBooks,
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

export const useBooksActions = (): Pick<BooksContextValue, "addBooks"> => {
  const { addBooks } = useContext(BooksContext);

  return { addBooks };
};

export default BooksContext;
