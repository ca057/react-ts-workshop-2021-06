import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Book } from "./types";

import { getBook } from "../store/selectors";
import { RootState } from "../store";

export const useFetchBook = (isbn: string) => {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookAsJson = await response.json();
      setBook(bookAsJson);
    }

    fetchBook();
  }, [isbn]);

  return book;
};

const useBook = (isbn: string): Book | null => {
  const book = useSelector<RootState, Book | null>(getBook(isbn));

  return book;
};

export default useBook;
