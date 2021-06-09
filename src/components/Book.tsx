import { useEffect, useState } from "react";

import { Book as BookI } from "../domain/types";

import "./Book.css";

interface BookProps {
  isbn: string;
}
const Book: React.FC<BookProps> = ({ isbn }) => {
  const [book, setBook] = useState<BookI>();

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookAsJson = await response.json();
      setBook(bookAsJson);
    }

    fetchBook();
  }, [isbn]);

  return book ? (
    <div>
      <p className="book__title">
        {book.title}
        <br />
        <span>{book.subtitle}</span>
      </p>
      <p className="book__pages">{book.numPages} pages</p>
    </div>
  ) : null;
};

export default Book;
