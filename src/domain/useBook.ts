import { useEffect, useState } from "react";
import { useBooksSelectors } from "./booksContext";
import { Book } from "./types";

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
  const { getBook } = useBooksSelectors();

  return getBook(isbn);
};

export default useBook;
