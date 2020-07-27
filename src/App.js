import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "./redux/actions/shared";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import QuestionDetail from "./components/QuestionDetail";
import Leaderboard from "./screens/Leaderboard";
import AppBar from "./components/AppBar";
import NewQuestion from "./screens/NewQuestion";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./screens/NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <AppBar />
            <div className="main-content">
              <Switch>
                <Route path="/" exact component={Login} />
                <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                <ProtectedRoute path="/add" exact component={NewQuestion} />
                <ProtectedRoute path="/leaderboard" component={Leaderboard} />
                <ProtectedRoute
                  path="/question/:id"
                  component={QuestionDetail}
                />
                <Route path="/not-found" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
