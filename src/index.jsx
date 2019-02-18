import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import carsReducer from './reducers/cars_reducer'
import CarsIndex from './containers/cars_index';

import '../assets/stylesheets/application.scss';

const garageName = "Big Tony's Garage";

const initalState = {
  garage: garageName,
  cars: []
}

const reducers = combineReducers({
  garage: (state= null, action) => state,
  cars: carsReducer
});

const store = createStore(reducers, initalState, middlewares);

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={CarsIndex}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
