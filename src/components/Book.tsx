import { Book as BookI } from "../domain/types";
import { expensivePublicKey } from "../utils";

import "./Book.css";

interface BookProps {
  book: BookI;
  style?: React.CSSProperties;
}
const Book: React.FC<BookProps> = ({ book, style }) => {
  // expensivePublicKey();

  return (
    <div style={style || {}}>
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
