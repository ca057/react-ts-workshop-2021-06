import { Route, useRouteMatch, Link } from "react-router-dom";

import Book from "../../components/Book";
import EditBook from "../../components/EditBook";
import useBook from "../../domain/useBook";

const BookDetails: React.FC = () => {
  const {
    params: { isbn },
    path,
    url,
  } = useRouteMatch<{ isbn: string }>();
  const book = useBook(isbn);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Route exact path={path}>
        <Book book={book} />
        <Link to={`${url}/edit`}>Edit</Link>
      </Route>
      <Route exact path={`${path}/edit`}>
        <EditBook book={book} handleSubmit={console.log} />
        <Link to={url}>Back</Link>
      </Route>
    </>
  );
};

export default BookDetails;
