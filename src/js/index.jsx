// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// // import reducers from './reducers'; 
// import rootReducer from './rootReducer';
// import App from './app';
// import { createStore, applyMiddleware, compose } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // const store = createStore(reducers, composeEnhancers(
// const store = createStore(rootReducer, composeEnhancers(
    
//   applyMiddleware(
//     promiseMiddleware(),
//   )
// ));
// OLD STUFF IF NEEDED

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';



render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
