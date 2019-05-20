import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import "./App.css";
import Ogres from "./components/ogres";
import OgreDetails from "./components/ogreDetails";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Switch>
            <Route path="/ogres/:id" component={OgreDetails} />
            <Route path="/ogres" component={Ogres} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/Ogres" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
