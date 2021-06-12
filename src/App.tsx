import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import Playground from "./screens/Playground";
import BooksScreen from "./screens/books";
import BookScreen from "./screens/book";

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
          <BooksScreen />
        </Route>
        <Route path="/books/:isbn">
          <BookScreen />
        </Route>
        <Route>
          <p>Not Found</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
