import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={search} />
        <Route path="/saved" component={saved} />
      </div>
    </Router>
  );
}

export default App;