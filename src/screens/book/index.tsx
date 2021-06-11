import { useParams } from "react-router-dom";

import BookDisplay from "../../components/Book";
import useBook from "../../domain/useBook";

const BookDetails: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const book = useBook(isbn);

  return book ? <BookDisplay book={book} /> : <p>Loading...</p>;
};

export default BookDetails;
