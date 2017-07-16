import React from 'react';
import {render} from "react-dom";
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