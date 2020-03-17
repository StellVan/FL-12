import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Components/MainPage/MainPage.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './Redux/reducers';
import reducer from './Redux/reducers/reducer';
import mockup from './Utilities/initialState';

import './index.css';

const Store = createStore(
  reducer,
  mockup,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <MainPage />
    </Router>
  </Provider>,
  document.getElementById('root')
);
