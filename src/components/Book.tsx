import { useEffect, useState } from "react";
import "./Book.css";

interface Book {
  title: string | null;
  subtitle: string | null;
  numPages: number | null;
}

interface BookDisplayProps {
  isbn: string;
}
const BookDisplay: React.FC<BookDisplayProps> = ({ isbn }) => {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookAsJson = await response.json();
      setBook(bookAsJson);
    }

    fetchBook();
  }, []);

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

export default BookDisplay;
