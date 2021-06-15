import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Book } from "../../domain/types";
import { addBooks } from "../../store/books";
import BookList from "./BookList";

function Books() {
  const [books, setBooks] = useState<Book[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:4730/books");
      const booksAsJson = await response.json();
      setBooks(booksAsJson);
      dispatch(addBooks(booksAsJson));
    }

    fetchBooks();
  }, [dispatch]);

  return <>{books ? <BookList items={books} /> : <p>Loading...</p>}</>;
}

export default Books;
