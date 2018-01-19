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