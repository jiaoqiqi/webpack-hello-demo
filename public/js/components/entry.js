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

import selectUserMiddleware from "../middleWares/userSelectMiddleware"
import addUserMiddleware from "../middleWares/userAddMiddleware"
import IndexRoute from "react-router/es/IndexRoute";

const createStoreWithMiddleware = applyMiddleware(selectUserMiddleware,addUserMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

render(

    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={SelectUser}/>
                <Route path="/select" component={SelectUser}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
