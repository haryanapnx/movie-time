import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { MoviesDetail, Movies } from "Features";

class IndexRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/movie-detail/:slug" exact component={MoviesDetail} />
        <Route path="/" exact component={Movies} />
      </Switch>
    );
  }
}

export default withRouter(IndexRouter);
