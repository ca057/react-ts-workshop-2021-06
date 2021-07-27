import { Book as BookI } from "../domain/types";
import { expensivePublicKey } from "../utils";

import "./Book.css";

interface BookProps extends Omit<BookI, "isbn"> {
  style?: React.CSSProperties;
}
const BookPreview: React.FC<BookProps> = ({
  title,
  subtitle,
  numPages,
  style,
}) => {
  expensivePublicKey();

  return (
    <div style={style || {}}>
      <p className="book__title">
        {title}
        <br />
        <span>{subtitle}</span>
      </p>
      <p className="book__pages">{numPages} pages</p>
    </div>
  );
};

export default BookPreview;
