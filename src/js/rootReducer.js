import { combineReducers } from 'redux';
import movieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer';

const rootReducer = combineReducers({
  movieSearch: movieSearchReducer
});

export default rootReducer;