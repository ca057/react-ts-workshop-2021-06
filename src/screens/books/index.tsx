import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Book } from "../../domain/types";
import { RootState } from "../../store";
import { fetchBooks } from "../../store/books";
import { getBooks } from "../../store/selectors";

import BookList from "./BookList";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector<RootState, Book[]>(getBooks());

  useEffect(() => {
    if (books.length > 0) return;

    dispatch(fetchBooks());
  }, [books.length, dispatch]);

  return <>{books ? <BookList items={books} /> : <p>Loading...</p>}</>;
}

export default Books;
