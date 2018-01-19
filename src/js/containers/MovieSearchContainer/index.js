import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';
//is this the jsx file or the the whole folder?

function mapStoreToProps(store) {
    return {
      movieSearch: store.movieSearch.movieSearchResults.Search
    };
  }
  
  // This might look odd but, connect returns a function,
  // that is then called with the component itself.
  export default connect(mapStoreToProps)(MovieSearchContainer);
  