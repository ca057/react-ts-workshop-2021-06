import React, { useCallback } from "react";
import { Book } from "../domain/types";
import BookPreview from "./Book";
import FancyButton from "./FancyButton";

const initialState: Book & { comment: string } = {
  title: "",
  isbn: "",
  subtitle: "",
  numPages: 0,
  comment: "",
};

interface EditBookProps {
  book?: Book;
  handleSubmit: (values: Book) => void;
}

const EditBook: React.FC<EditBookProps> = ({ book, handleSubmit }) => {
  const [values, setValues] = React.useState(
    book ? { ...book, comment: "" } : initialState
  );
  const { isbn, numPages, subtitle, title } = values;

  const createChangeHandler =
    (key: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [key]: event.target.value,
      }));
    };

  const handleOnSubmit = useCallback(() => {
    handleSubmit({ isbn, numPages, subtitle, title });
  }, [handleSubmit, isbn, numPages, subtitle, title]);

  return (
    <div className="row">
      <div>
        <fieldset>
          <legend>Edit</legend>
          <input
            type="text"
            placeholder="Title"
            required
            value={values.title}
            onChange={createChangeHandler("title")}
          />
          <input
            type="subtitle"
            placeholder="Subtitle"
            required
            value={values.subtitle}
            onChange={createChangeHandler("subtitle")}
          />
          <input
            type="text"
            placeholder="ISBN"
            value={values.isbn}
            onChange={createChangeHandler("isbn")}
            required
            pattern="((?:[\dX]{13})|(?:[\d\-X]{17})|(?:[\dX]{10})|(?:[\d\-X]{13}))" // taken from https://regexr.com/38pq9
          />
          <input
            type="number"
            placeholder="Number of pages"
            required
            value={values.numPages}
            minLength={0}
            onChange={createChangeHandler("numPages")}
          />
          <input
            type="text"
            placeholder="Comment"
            required
            value={values.comment}
            minLength={0}
            onChange={createChangeHandler("comment")}
          />
          <FancyButton type="submit" onClick={handleOnSubmit}>
            Submit changes
          </FancyButton>
        </fieldset>
      </div>
      <BookPreview book={values} style={{ backgroundColor: "lightpink" }} />
    </div>
  );
};

export default EditBook;
