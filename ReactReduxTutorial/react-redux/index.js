﻿import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './index.less';

import Sprint from './components/sprint';
import SprintList from './components/sprintList';
import reducers from './redux';

document.addEventListener("DOMContentLoaded", () => {

    const store = createStore(reducers, applyMiddleware(thunk));
    const target = document.getElementById('app');

    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/" component={SprintList} />
                        <Route path="/sprints/:guid" component={Sprint} />
                    </Switch>
                </div>
            </Router>
        </Provider>, target);
});