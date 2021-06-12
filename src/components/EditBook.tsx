import React from "react";

const initialState = {
  title: "",
  isbn: "",
};

interface EditBookProps {
  book?: {
    title: string;
    isbn: string;
  };
  handleSubmit: (values: typeof initialState) => void;
}

const EditBook: React.FC<EditBookProps> = ({ book, handleSubmit }) => {
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
  };

  return (
    <form onSubmit={handleOnSubmit}>
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
          type="text"
          placeholder="ISBN"
          value={values.isbn}
          onChange={createChangeHandler("isbn")}
          required
          pattern="((?:[\dX]{13})|(?:[\d\-X]{17})|(?:[\dX]{10})|(?:[\d\-X]{13}))" // taken from https://regexr.com/38pq9
        />
        <button>Submit changes</button>
      </fieldset>
    </form>
  );
};

export default EditBook;
