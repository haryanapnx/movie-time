import React, { Component } from "react";
import Header from "../../components/Header";
import Movies from "./movies";
import NowPlaying from "../../components/NowPlaying";
import MovieNews from "../../components/MovieNews";
import UserReviews from "../../components/UserReviews";
import { connect } from "react-redux";
import { getMovies, searchMovies } from "../../redux/actions/movieAction";
import PartnersStudio from "../../components/PartnersStudio";
import Footers from "../../components/Footer";
import Loader from "../../components/Loader";

class MoviesContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }
  handleSearch = async q => {
    await  this.props.dispatch(searchMovies(q));
  };
  render() {
    return (
      <>
        {this.props.isLoading && <Loader />}
        <Header
          searchMovies={this.handleSearch}
          movies_list_search={this.props.movies_list_search}
        />
        <NowPlaying movies_list={this.props.movies_list} />
        <MovieNews />
        <UserReviews />
        <PartnersStudio />
        <Movies />
        <Footers />
      </>
    );
  }
}
const mapStateToProps = state => {
  const { movies_list, movies_list_search, isLoading } = state.movies;
  return {
    movies_list,
    isLoading,
    movies_list_search
  };
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
