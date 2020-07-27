import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { setAuthedUser, clearAuthedUser } from "../redux/actions/authedUser";

class Login extends Component {
  state = {
    userId: null,
    toHome: false,
  };

  componentDidMount() {
    this.props.dispatch(clearAuthedUser());
  }

  handleSelectionChanged = function (event) {
    const userId = event.target.value;

    this.setState(function (previousState) {
      return {
        ...previousState,
        userId,
      };
    });
  };

  handleLogin = function (event) {
    const { userId } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(userId));

    this.setState(function (previousState) {
      return {
        ...previousState,
        toHome: true,
      };
    });
  };

  render() {
    const { userId, toHome } = this.state;
    const { users } = this.props;
    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" },
    };
    const selected = userId ? userId : -1;

    if (toHome) {
      return <Redirect to={from} />;
    }

    return (
      <div
        style={{
          padding: 10,
          height: 250,
          boxShadow: "0px 1px 5px grey",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <h2 style={{ color: "orange" }}>Welcome To Would You Rather App</h2>
        <div>
          <div style={{ padding: 20 }}>Sign in to continue</div>
          <select
            value={selected}
            onChange={(event) => this.handleSelectionChanged(event)}
          >
            <option value="-1" disabled>
              Select user...
            </option>
            {Object.keys(users).map(function (key) {
              return (
                <option value={users[key].id} key={key}>
                  {users[key].name}
                </option>
              );
            })}
          </select>
        </div>

        <button
          style={{
            marginTop: 30,
            color: "#fff",
            backgroundColor: "orange",
            width: "100%",
            borderRadius: 10,
          }}
          disabled={userId === null}
          onClick={(event) => this.handleLogin(event)}
        >
          Login
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
