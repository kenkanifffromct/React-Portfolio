import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/posts/Portfolio" component={Portfolio} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
