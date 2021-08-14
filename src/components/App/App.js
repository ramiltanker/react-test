import React from "react";
import { Route, Switch } from "react-router-dom";

// Компоненты
import Link from "../Link/Link";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import Counter from "../Counter/Counter";
// Компоненты

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <>
            <Link title="Рецепт пельменей" url="#" />
          </>
        </Route>
        <Route path="/cards" exact>
          <Cards />
        </Route>
        <Route path="/counter" exact>
          <Counter />
        </Route>
      </Switch>
    </>
  );
}

export default App;
