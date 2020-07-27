import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const classes = useStyles();

  const { user, authedUser } = props;
  const avatar = user ? user.avatarURL : "placeholder.png";
  const name = user ? user.name : "";
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Button color="secondary">
              <Link to="/dashboard">Home</Link>
            </Button>
            <Button>
              <Link to="/add">Add Question</Link>
            </Button>
            <Button>
              <Link to="/leaderboard">Leader Board</Link>
            </Button>
          </div>
          {authedUser && (
            <div>
              <span>Hello {name}</span>
              <img
                src={avatar}
                alt={`Avatar of ${authedUser}`}
                className="nav-avatar"
              />
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Logout
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps({ authedUser, users }, props) {
  return {
    authedUser,
    users,
    user: users[authedUser],
  };
}
export default connect(mapStateToProps)(NavBar);
