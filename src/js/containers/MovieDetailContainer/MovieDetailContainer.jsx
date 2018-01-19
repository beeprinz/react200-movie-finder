import React from 'react';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

<div className="container">
      
      <h1 className="display-3 text-center">Movie Finder</h1>


  <div className="row">
    <button type="submit" className="btn btn-primary mb-2">Go Back</button>
  </div>


  <div className="container py-3">
    <div className="card">
      <div className="row ">
        <div className="col-md-4">
            <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzkzNjcxNV5BMl5BanBnXkFtZTcwNzk4NTU0Mg@@._V1_UY268_CR8,0,182,268_AL_.jpg" className="w-100"/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title mt-2">Blade</h4>
              {/* <p>Viewing movie {this.props.match.params.id}</p> */}
              <p className="card-text">1998 120 minutes action</p>
              <p className="card-text">This guy blade kills vampires and is super cool!</p>
              <p className="card-text">Nominated for 7 oscars, won 7 oscars</p>
              <p className="card-text">metascore: 100/100</p>
              <p className="card-text">Imdb:10/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

        {/* <p>Viewing movie {this.props.match.params.id}</p> */}
      </div>
    )
  }
}

export default MovieDetailContainer;