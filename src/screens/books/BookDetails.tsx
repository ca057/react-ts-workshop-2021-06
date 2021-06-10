import { useParams } from "react-router-dom";
import { Book } from "../../domain/types";

const BookDetails: React.FC = () => {
  const { isbn } = useParams<{ isbn: string }>();
  return <p>{isbn}</p>;
};

export default BookDetails;
