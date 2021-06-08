import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
      <Counter initialValue={0} />
      <Counter />
    </>
  );
}

export default App;
