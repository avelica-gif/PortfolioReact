import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// CSS
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// components
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    // This is my websites main hub/controller for all the different components
    <Router>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/projects">
            <p className="mt-2">Projects</p>
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/contact">
            <p className="mt-2 ml-3">Contact</p>
          </Link>
        </Nav.Item>
      </Nav>

      {/* /* // Components HERE
      // figure out how to switch between which components are being shown */}

      <div className="container">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>

      {/* // Footer HERE */}
    </Router>
  );
}

export default App;
