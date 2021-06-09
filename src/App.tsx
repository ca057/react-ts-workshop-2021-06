import SimpleName from "./components/SimpleName";
import Counter from "./components/Counter";
import BookList from "./components/BookList";
import Book from "./components/Book";
import "./App.css";

function App() {
  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
      <BookList />
      <Book />
    </>
  );
}

export default App;
