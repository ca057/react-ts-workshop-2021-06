import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookDisplay from "../../components/Book";
import { Book } from "../../domain/types";

const BookDetails: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const bookAsJson = await response.json();
      setBook(bookAsJson);
    }

    fetchBook();
  }, [isbn]);

  return book ? <BookDisplay book={book} /> : <p>Loading...</p>;
};

export default BookDetails;
