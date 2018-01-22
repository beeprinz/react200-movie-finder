import axios from "axios";

export function getMovie(movieName) { 
    console.log('actions movie name',{movieName})
  return {
    type: "GET_MOVIE",
    payload:     
    axios
    .get(`/api/${movieName}`)
    .then(r => r.data)
    .catch(err => {
      console.log(err);
    })
    //will i need to do /api/#/${ movieName } ?

  };
//   console.log('movie data',r.data)
}

export function getMovieById(movieId){
    console.log('actions movie id', {movieId})
    return {
        type: "GET_MOVIE_BY_ID",
        payload:     
        axios
        .get(`/api/movie/${movieId}`)
        .then(r => {
            return r.data
        console.log('actions id payload',r.data)})
        .catch(err => {
          console.log(err);
        })    
      };
}