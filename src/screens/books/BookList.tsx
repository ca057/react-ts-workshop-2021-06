import BookListItem from "./BookListItem";

const list = [
  { title: "A first Book", isbn: "1", price: "19.99€" },
  { title: "Another awesome Book", isbn: "2", price: "29.99€" },
  { title: "Learn React - the full book", isbn: "3", price: "39.99€" },
];

const BookList = () => {
  return (
    <ul>
      {list.map((book) => (
        <BookListItem
          {...book}
          key={book.isbn}
          onClick={() => {
            window.alert(`"${book.title}" costs ${book.price}.`);
          }}
        />
      ))}
    </ul>
  );
};

export default BookList;
