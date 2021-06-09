import { useEffect, useState } from "react";

import SimpleName from "./components/SimpleName";
import Counter from "./components/Counter";
import BookList from "./components/BookList";
import Book from "./components/Book";
import BookFormBuildInValidation from "./components/BookFormBuildInValidation";
import { Book as BookI } from "./domain/types";

import "./App.css";

const isbn = "9781783983667";
function App() {
  const [book, setBook] = useState<BookI>();

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookAsJson = await response.json();
      setBook(bookAsJson);
    }

    fetchBook();
  }, []);

  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
      <BookFormBuildInValidation
        title="Edit the book “Learning WebRTC”"
        book={{
          title: "Learning WebRTC",
          isbn: "9781783983667",
        }}
        handleSubmit={(values) => console.log(values)}
      />
      <BookFormBuildInValidation
        handleSubmit={(values) => console.log(values)}
      />
      <BookList />
      {book && <Book book={book} />}
    </>
  );
}

export default App;
