interface BookListItemProps {
  title: string;
}

const BookListItem: React.FC<BookListItemProps> = ({ title }) => {
  return <li>{title}</li>;
};

export default BookListItem;
