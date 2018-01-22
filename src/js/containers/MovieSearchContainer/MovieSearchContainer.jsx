import React from 'react';
import { Link } from 'react-router-dom'
// const Link = ReactRouterDom.Link

import {
  getMovie
} from './movieSearchActions'

import {
  getMovieById
} from './movieSearchActions'

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName:""
  }
  this.handleMovieNameInput = this.handleMovieNameInput.bind(this);
  this.handleMovieSearch = this.handleMovieSearch.bind(this);
  this.handleMovieInfo = this.handleMovieInfo.bind(this);
  this.renderSearchResults = this.renderSearchResults.bind(this);
  }

handleMovieNameInput(e){
    const { value } = e.target;
    this.setState({ 
        movieName: value
    })
}

handleMovieSearch() {
    const { dispatch } = this.props;
    dispatch(getMovie(this.state.movieName));
}
//if error: dispatch is not a function it means component isn't connected to store
//check app.jsx to make sure you are importing folder that contains the index.js connected to that component 
renderSearchResults() {
  const { movieSearch } = this.props
  if (!movieSearch) { return null }
  return movieSearch.map((movie, index) => {
      // return <a href="#" key={index} className="list-group-item list-group-item-action">{city.cityName} <p className='small'>{city.dateCalendar} {city.dateHour}</p></a>
      return <div className="container py-3" key={index}>
          <div className="card">
            <div className="row ">
              <div className="col-md-4">
                <img src={movie.Poster} />
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <h4 className="card-title mt-2"> {movie.Title} </h4>
                  <p className="card-text"> {movie.Year} </p>
                  {/* <p className="card-text"> { movie.plot } </p> */}

                  <Link to={`/movie/${movie.imdbID}`}>
                    <button 
                    type="button" 
                    className="btn btn-primary"
                    id= {movie.imdbID}
                    onClick= { this.handleMovieInfo } 
                    >
                      More Information
                    </button>
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>;
  })
}

handleMovieInfo(e){
  const { dispatch } = this.props;
  dispatch(getMovieById(e.target.id));
  // const index = movieSearch.map((movie,)
} 

  render() {

    const { movieSearch } = this.props;
    //const movieSearch = this.props.movieSearch;

    console.log('movieSearchContainer.jsx props', movieSearch);

    return (
      <div className="container">
      
      <h1 className="display-3 text-center text-light">Movie Finder</h1>

<form onSubmit={e => e.preventDefault()}>
  <div className="form-group row">
    <div className="col-sm-10">
      <input 
      type="text" 
      className="form-control" 
      id="movieTitleInput" 
      placeholder="Movie Title"
      value={ this.state.movieName }
      onChange= { this.handleMovieNameInput }
      />
    </div>
    <button 
    type="submit" 
    className="btn btn-primary mb-2"
    onClick={ this.handleMovieSearch }
    >
    Find Movie!
    </button>
  </div>
</form>

<div>
  { this.renderSearchResults() }
</div>


  </div>

    )
  }
}

