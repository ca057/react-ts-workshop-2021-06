import { useEffect } from "react";
import { useBooksActions, useBooksSelectors } from "../../domain/booksContext";
import BookList from "./BookList";

function Books() {
  const { addBooks } = useBooksActions();
  const { getBooks } = useBooksSelectors();
  const books = getBooks();

  useEffect(() => {
    if (books.length > 0) return;
    async function fetchBooks() {
      const response = await fetch("http://localhost:4730/books");
      const booksAsJson = await response.json();
      addBooks(booksAsJson);
    }

    fetchBooks();
  }, []);

  return <>{books ? <BookList items={books} /> : <p>Loading...</p>}</>;
}

export default Books;
