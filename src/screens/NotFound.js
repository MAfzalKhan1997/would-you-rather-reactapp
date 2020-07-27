import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
function ErrorPage(props) {
  return (
    <div>
      <Typography variant="h2">404 Error: Page not found</Typography>
    </div>
  );
}

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(ErrorPage);
