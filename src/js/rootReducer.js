import { combineReducers } from 'redux';
import movieDetailReducer from './containers/MovieDetailContainer/MovieDetailReducer';
import movieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer';

const rootReducer = combineReducers({
  movieDetails: movieDetailReducer,
  movieSearch: movieSearchReducer
});

export default rootReducer;