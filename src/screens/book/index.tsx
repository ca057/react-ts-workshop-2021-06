import { ComponentProps } from "react";
import { Route, useRouteMatch, Link, useHistory } from "react-router-dom";

import Book from "../../components/Book";
import EditBook from "../../components/EditBook";
import useBook from "../../domain/useBook";

const BookDetails: React.FC = () => {
  const {
    params: { isbn },
    path,
    url,
  } = useRouteMatch<{ isbn: string }>();
  const { goBack } = useHistory();
  const book = useBook(isbn);

  if (!book) {
    return <p>Loading...</p>;
  }

  const handleSubmit: ComponentProps<typeof EditBook>["handleSubmit"] = (
    book
  ) => {
    console.log(book);
    goBack();
  };

  return (
    <>
      <Route exact path={path}>
        <Book book={book} />
        <Link to={`${url}/edit`}>Edit</Link>
      </Route>
      <Route exact path={`${path}/edit`}>
        <EditBook book={book} handleSubmit={handleSubmit} />
        <Link to={url}>Cancel and go back</Link>
      </Route>
    </>
  );
};

export default BookDetails;
