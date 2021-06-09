import { Book as BookI } from "../domain/types";

import "./Book.css";

interface BookProps {
  book: BookI;
}
const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div>
      <p className="book__title">
        {book.title}
        <br />
        <span>{book.subtitle}</span>
      </p>
      <p className="book__pages">{book.numPages} pages</p>
    </div>
  );
};

export default Book;
