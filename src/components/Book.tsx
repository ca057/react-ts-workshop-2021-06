import "./Book.css";

interface Book {
  title: string | null;
  subtitle: string | null;
  numPages: number | null;
}
const book: Book = {
  title: "My book",
  subtitle: "This book is awesome!",
  numPages: 23,
};

const BookDisplay = () => {
  return (
    <div>
      <p className="book__title">
        {book.title}
        <br />
        <span>{book.subtitle}</span>
      </p>
      <p className="book__pages">{book.numPages} pages</p>
    </div>
  );
};

export default BookDisplay;
