import { Book } from "../../domain/types";
import BookListItem from "./BookListItem";

interface BookListProps {
  items: Book[];
}
const BookList: React.FC<BookListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((book) => (
        <BookListItem {...book} key={book.isbn} />
      ))}
    </ul>
  );
};

export default BookList;
