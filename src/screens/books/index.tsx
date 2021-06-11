import { useEffect, useState } from "react";
import { Book } from "../../domain/types";
import BookList from "./BookList";

function Books() {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:4730/books");
      const booksAsJson = await response.json();
      setBooks(booksAsJson);
    }

    fetchBooks();
  }, []);

  return <>{books ? <BookList items={books} /> : <p>Loading...</p>}</>;
}

export default Books;
