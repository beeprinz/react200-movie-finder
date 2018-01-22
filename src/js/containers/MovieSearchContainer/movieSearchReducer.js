const defaultState = {
    movieSearchResults: [],
    movieDetails: {}
  };
  
  export default function MovieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_MOVIE_PENDING' : 
            return {
                ...state,
                error: ''
            }
        case 'GET_MOVIE_FULFILLED' : {
            if(typeof payload === 'undefined') {
                return {
                    ...state,
                    error: 'movie not found, try again!'
                }
            }
            return {
                ...state,
                movieSearchResults: payload
            };
        }    

        case 'GET_MOVIE_REJECTED' : 
        return {
            ...state,
            error: payload.message
        }
        //message js default error 

        case 'GET_MOVIE_BY_ID_FULFILLED':
        console.log('GET_MOVIE_BY_ID_FULFILLED payload',payload)
        return {
            ...state,
            movieDetails: payload
        }


    default: {
        return state;
      }
}
}
    