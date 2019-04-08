import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import TodoList from './views/TodoList';
import Calculator from './views/Calculator';
import SimpleInterest from './views/SimpleInterest';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <ul id="nav">
                <li>
                    <Link to="/">Todo List</Link>
                </li>
                <li>
                    <Link to="/simpleinterest">Simple Interest Calculator</Link>
                </li>
                <li>
                    <Link to="/calculator">Calculator</Link>
                </li>
            </ul>
            <Route exact path="/" component={TodoList} />
            <Route path="/simpleinterest" component={SimpleInterest} />
            <Route path="/calculator" component={Calculator} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
