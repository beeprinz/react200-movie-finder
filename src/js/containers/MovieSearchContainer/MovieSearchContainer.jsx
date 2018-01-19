import React from 'react';

import {
  getMovie
} from './movieSearchActions'

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName:""
  }
  this.handleMovieNameInput = this.handleMovieNameInput.bind(this);
  this.handleMovieSearch = this.handleMovieSearch.bind(this);
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

renderSearchResults() {
  const { movieSearch } = this.props
  if (!movieSearch) { return null }
  return movieSearch.map((movie, index) => {
      // return <a href="#" key={index} className="list-group-item list-group-item-action">{city.cityName} <p className='small'>{city.dateCalendar} {city.dateHour}</p></a>
      return <div className="container py-3" key={index}>
      <div className="card">
        <div className="row ">
          <div className="col-md-4">
              <img src= { movie.Poster }/>
            </div>
            <div className="col-md-8 px-3">
              <div className="card-block px-3">
                <h4 className="card-title mt-2"> { movie.Title } </h4>
                <p className="card-text"> { movie.Year } </p>
                {/* <p className="card-text"> { movie.plot } </p> */}
                <a href="#" className="btn btn-primary">More Information</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  })
}


  render() {

    const { movieSearch } = this.props;
    console.log('movieSearchContainer.jsx props', movieSearch);

    return (
      <div className="container">
      
      <h1 className="display-3 text-center">Movie Finderr</h1>

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

  {/* <div className="container py-3">
    <div className="card">
      <div className="row ">
        <div className="col-md-4">
            <img src= { movieSearch.poster }/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title mt-2"> { movieSearch.movieName } </h4>
              <p className="card-text"> { movieSearch.year } </p>
              <p className="card-text"> { movieSearch.plot } </p>
              <a href="#" className="btn btn-primary">More Information</a>
            </div>
          </div>
        </div>
      </div>
    </div> */}


  </div>

    )
  }
}

