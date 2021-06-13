import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../../domain/types";
import { RootState } from "../../store";
import { addBooks } from "../../store/books";
import { getBooks } from "../../store/selectors";

import BookList from "./BookList";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector<RootState, Book[]>(getBooks());

  useEffect(() => {
    if (books.length > 0) return;
    async function fetchBooks() {
      const response = await fetch("http://localhost:4730/books");
      const booksAsJson = await response.json();
      dispatch(addBooks(booksAsJson));
    }

    fetchBooks();
  }, []);

  return <>{books ? <BookList items={books} /> : <p>Loading...</p>}</>;
}

export default Books;
