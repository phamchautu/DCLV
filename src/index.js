import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore} from '@reduxjs/toolkit'
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import rootReducer from './slices/rootReducer'
import { Provider } from 'react-redux';

const store=  configureStore({
  reducer: rootReducer,
  middleware :[thunk],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
