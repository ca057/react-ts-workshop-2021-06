import { Switch, Route, Link, Redirect } from "react-router-dom";

import Playground from "./screens/Playground";
import Books from "./screens/Books";

import "./App.css";

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
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </>
  );
}

export default App;
