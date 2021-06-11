import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import Playground from "./screens/Playground";
import Books from "./screens/books";
import BookDetails from "./screens/book";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <NavLink activeClassName="activeNav" to="/books">
          Books
        </NavLink>
        <NavLink activeClassName="activeNav" to="/playground">
          Playground
        </NavLink>
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
