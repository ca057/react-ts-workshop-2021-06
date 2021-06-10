const items = [
  { title: "A first Book", isbn: "1", price: "19.99€" },
  { title: "Another awesome Book", isbn: "2", price: "29.99€" },
  { title: "Learn React - the full book", isbn: "3", price: "39.99€" },
];

interface BookListItemProps {
  title: string;
  price: string;
}
const BookListItem: React.FC<BookListItemProps> = ({ title }) => {
  return <li className="BookListItem">Title: {title}</li>;
};

const BookList = () => {
  return (
    <ul className="BookList">
      {items.map((item) => {
        return (
          <BookListItem
            key={item.isbn}
            title={item.title}
            price={item.price}
          ></BookListItem>
        );
      })}
    </ul>
  );
};

export default BookList;
