import BookList from "./BookList";
const list = [
  {
    title: "A first Book",
    isbn: "1",
    price: "19.99€",
    subtitle: "",
    numPages: 0,
  },
  {
    title: "Another awesome Book",
    isbn: "2",
    price: "29.99€",
    subtitle: "",
    numPages: 0,
  },
  {
    title: "Learn React - the full book",
    isbn: "3",
    price: "39.99€",
    subtitle: "",
    numPages: 0,
  },
];

function Books() {
  return (
    <>
      <BookList items={list} />
    </>
  );
}

export default Books;
