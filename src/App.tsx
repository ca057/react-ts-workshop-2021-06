import SimpleName from "./components/SimpleName";
import Counter from "./components/Counter";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <>
      <SimpleName />
      <Counter initialValue={0} />
      <Counter />
      <BookList />
    </>
  );
}

export default App;
