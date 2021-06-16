import { ComponentProps } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch, Link, useHistory } from "react-router-dom";

import Book from "../../components/Book";
import EditBook from "../../components/EditBook";
import useBook from "../../domain/useBook";
import { updateBook } from "../../store/books";

const BookDetails: React.FC = () => {
  const {
    params: { isbn },
    path,
    url,
  } = useRouteMatch<{ isbn: string }>();
  const { goBack } = useHistory();
  const book = useBook(isbn);
  const dispatch = useDispatch();

  const handleSubmit: ComponentProps<typeof EditBook>["handleSubmit"] = (
    book
  ) => {
    dispatch(updateBook(book));
    // goBack();
  };

  if (!book) {
    return <p>Book not available.</p>;
  }

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
