import { useEffect, useState } from "react";
import { Book } from "./types";

const useBook = (isbn: string) => {
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

export default useBook;
