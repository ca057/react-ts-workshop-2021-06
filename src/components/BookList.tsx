import BookListItem from "./BookListItem";

const list = [
  { title: "A first Book", isbn: "1" },
  { title: "Another awesome Book", isbn: "2" },
  { title: "Learn React - the full book", isbn: "3" },
];

const BookList = () => {
  return (
    <ul>
      {list.map((book) => (
        <BookListItem {...book} key={book.isbn} />
      ))}
    </ul>
  );
};

export default BookList;
