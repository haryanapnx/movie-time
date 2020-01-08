import React, { Component } from "react";
import Header from "components/Header";
import Movies from "./movies";
import NowPlaying from "components/NowPlaying";
import MovieNews from "components/MovieNews";
import UserReviews from "components/UserReviews";
import { connect } from "react-redux";
import {getMovies} from 'redux/actions/movieAction'
import PartnersStudio from "../../components/PartnersStudio";
import Footers from "../../components/Footer";

class MoviesContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getMovies())
    }
  render() {
      console.log(this.props.movies_list);
      
    return (
      <>
        <Header />
        <NowPlaying movies_list={this.props.movies_list} />
        <MovieNews />
        <UserReviews />
        <PartnersStudio />
        <Movies />
        <Footers/>
      </>
    );
  }
}
const mapStateToProps = state => {
  const { movies_list, isLoading } = state.movies;
  return {
    movies_list,
    isLoading
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
