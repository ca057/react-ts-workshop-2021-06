import { Switch, Route, Link, Redirect } from "react-router-dom";

import Playground from "./screens/Playground";
import Books from "./screens/books";

import "./App.css";
import BookDetails from "./screens/books/BookDetails";

function App() {
  return (
    <>
      <nav>
        <Link to="/books">Books</Link>
        <Link to="/playground">Playground</Link>
      </nav>
      <Switch>
        <Redirect exact path="/" to="/books" />
        <Route path="/playground">
          <Playground />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/books/:isbn">
          <BookDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
