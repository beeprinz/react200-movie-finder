import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
      movieDetails: store.movieSearch.movieDetails
    };
  }
  
  // This might look odd but, connect returns a function,
  // that is then called with the component itself.
  export default connect(mapStoreToProps)(MovieDetailContainer);
