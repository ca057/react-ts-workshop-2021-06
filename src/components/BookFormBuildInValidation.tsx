import React from "react";

import "./BookFormBuildInValidation.css";

const initialState = {
  title: "",
  isbn: "",
};

interface BookFormBuildInValidationProps {
  book?: {
    title: string;
    isbn: string;
  };
  title?: string;
  handleSubmit: (values: typeof initialState) => void;
}

const BookFormBuildInValidation: React.FC<BookFormBuildInValidationProps> = ({
  book,
  handleSubmit,
  title = "Create a new book",
}) => {
  const [values, setValues] = React.useState(book ?? initialState);

  const createChangeHandler =
    (key: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [key]: event.target.value,
      }));
    };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.nativeEvent.preventDefault();
    handleSubmit({ ...values });
    setValues(initialState);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <fieldset>
        <legend>{title}</legend>
        <input
          type="text"
          placeholder="Title"
          required
          value={values.title}
          onChange={createChangeHandler("title")}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={values.isbn}
          onChange={createChangeHandler("isbn")}
          required
          pattern="((?:[\dX]{13})|(?:[\d\-X]{17})|(?:[\dX]{10})|(?:[\d\-X]{13}))" // taken from https://regexr.com/38pq9
        />
        <button>Submit</button>
      </fieldset>
    </form>
  );
};

export default BookFormBuildInValidation;
