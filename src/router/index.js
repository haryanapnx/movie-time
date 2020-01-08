import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { MovieDetail, Home } from "features";

class IndexRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/movie-detail" exact component={MovieDetail} />
        <Route path="/home" exact component={Home} />
      </Switch>
    );
  }
}

export default withRouter(IndexRouter);
