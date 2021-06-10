import { Book } from "../../domain/types";

interface BookListItemProps extends Book {}

const BookListItem: React.FC<BookListItemProps> = ({ title }) => {
  return <li>{title}</li>;
};

export default BookListItem;
