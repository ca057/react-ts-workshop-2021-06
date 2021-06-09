interface BookListItemProps {
  title: string;
  onClick: () => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ title, onClick }) => {
  return <li onClick={onClick}>{title}</li>;
};

export default BookListItem;
