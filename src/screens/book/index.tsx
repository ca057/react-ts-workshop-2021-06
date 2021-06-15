import { ComponentProps } from "react";
import { useSelector } from "react-redux";
import { Route, useRouteMatch, Link, useHistory } from "react-router-dom";

import BookDisplay from "../../components/Book";
import EditBook from "../../components/EditBook";
import { Book } from "../../domain/types";
import { RootState } from "../../store";
import { getBook } from "../../store/selectors";

const BookDetails: React.FC = () => {
  const {
    params: { isbn },
    path,
    url,
  } = useRouteMatch<{ isbn: string }>();
  const { goBack } = useHistory();
  const book = useSelector<RootState, Book | undefined>(getBook(isbn));

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
        <BookDisplay book={book} />
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
