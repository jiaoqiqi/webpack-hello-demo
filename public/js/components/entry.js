import React from 'react';
import {render} from "react-dom";
import {Route} from "react-router";
import {Provider} from "react-redux";
import {Router} from "react-router";
import {createStore, applyMiddleware} from 'redux';
import {hashHistory } from 'react-router'



import SelectUser from "../containers/userSelect"
import reducer from "../reducers/index";
import App from "./app";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(

    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/userSelect" component={SelectUser}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);