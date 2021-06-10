import { Link } from "react-router-dom";

import { Book } from "../../domain/types";

interface BookListItemProps extends Book {}

const BookListItem: React.FC<BookListItemProps> = ({ title, isbn }) => {
  return (
    <li>
      <Link to={`/books/${isbn}`}>{title}</Link>
    </li>
  );
};

export default BookListItem;
