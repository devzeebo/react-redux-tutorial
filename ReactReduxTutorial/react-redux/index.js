import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './index.less';

import Board from './components/containers/boardContainer';
import Sprint from './components/containers/sprintContainer';
import SprintList from './components/containers/sprintListContainer';
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
                        <Route exact path="/sprints/:guid" component={Sprint} />
                        <Route exact path="/sprints/:sprintGuid/:guid" component={Board} />
                    </Switch>
                </div>
            </Router>
        </Provider>, target);
});
