import React from 'react';
import { Link } from 'react-router-dom'


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieDetails } = this.props;
    console.log('movieDetailContainer props', this.props.movieDetails);
    return (
      <div>

<div className="container">
      
      <h1 className="display-3 text-center text-white">Movie Finder</h1>

  <div className="container py-3">
    <div className="card">
      <div className="row ">
        <div className="col-md-4">
            <img src={movieDetails.Poster} className="w-100"/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title mt-2">{movieDetails.Title}</h4>
              <p className="card-text">{movieDetails.Year}, {movieDetails.Runtime}, {movieDetails.Genre}</p>
              <p className="card-text">{movieDetails.Plot}</p>
              <p className="card-text">{movieDetails.Awards}</p>
              {/* <p className="card-text">{movieDetails.Ratings[0].Source}</p>  why doesn't it work!?*/}
              <p className="card-text">Metascore: {movieDetails.Metascore}</p>
              <p className="card-text">Imdb Rating: {movieDetails.imdbRating}</p>
              <Link to= {'/'}>
                <div className="container py-3">
                  <div className="row">
                    <button type="submit" className="btn btn-primary mb-2">Go Back</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
      </div>
    )
  }
}

export default MovieDetailContainer;