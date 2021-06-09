import React from "react";

import "./BookFormBuildInValidation.css";

const initialState = {
  title: "",
  isbn: "",
};

interface BookFormBuildInValidationProps {
  sendForm: (values: typeof initialState) => void;
}

const BookFormBuildInValidation: React.FC<BookFormBuildInValidationProps> = ({
  sendForm,
}) => {
  const [values, setValues] = React.useState(initialState);

  const createChangeHandler =
    (key: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [key]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    sendForm({ ...values });
    setValues(initialState);
    event.nativeEvent.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create a new book</legend>
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
          minLength={10}
          maxLength={13}
        />
        <button>Submit</button>
      </fieldset>
    </form>
  );
};

export default BookFormBuildInValidation;
