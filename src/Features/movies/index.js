import React, { Component } from "react";
import Header from "components/Header";
import Movies from "./movies";

export default class MoviesContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Movies/>
      </>
    );
  }
}
