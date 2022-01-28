import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";


import "./app.css";
import Details from "./Details";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}> 
     
    <Router>
      <Link to="/">
        <header>
          <h1>Adopt Me</h1>
        </header>
      </Link>

      <Switch>
        <Route exact path="/">
        
          <SearchParams />
         
        </Route>

        <Route path="/details/:id">
          <Details />
        </Route>

        
        
      </Switch>
    </Router>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
