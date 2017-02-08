import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Main from "./pages/Main";
import '../scss/main.scss';

var app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}></Route> 
    </Router>,
    app
);