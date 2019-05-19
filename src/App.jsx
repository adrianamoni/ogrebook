import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import NewMovie from "./components/newMovie";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
            <Route path="/movies/new" exact component={NewMovie} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
