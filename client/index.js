/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Single from './components/Single';
import Carousel from './components/Carousel';

/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
import store, { history } from './store';

/*
  Error Logging
*/

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
// if(window) {
//   Raven.config(sentry_url).install();
// }


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Carousel} />
        <Route path="/view/:movieId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

