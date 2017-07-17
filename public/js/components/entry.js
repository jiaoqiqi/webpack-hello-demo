import React from 'react';
import {render} from "react-dom";
<<<<<<< HEAD
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
=======
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import reducer from '../Reducers/index';
import App from "app";
import userSelect from '../Containers/userSelect';

import userSelectMiddleware from '../middleWares/userSelect-middleware';

const createMiddlewareStore = applyMiddleware(userSelectMiddleware)(createStore);
const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={userSelect}></IndexRoute>
            <Route path="/userSelect" component={userSelect}/>
        </Route>

    </Router>
</Provider>);
>>>>>>> 628ecd21eb1a1f320d42211fca92ef21c271bddb
