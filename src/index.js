import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AllReviews from './AllReviews';
import AddReview from './AddReview';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div className="nav">
      <Link className="wrap" to="/">Home</Link>
      <Link className="wrap" to="/all">All Reviews</Link>
      <Link className="wrap" to="/add">Add Review</Link>
    </div>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/all" component={AllReviews} />
      <Route path="/add" component={AddReview} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
