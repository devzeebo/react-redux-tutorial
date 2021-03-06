import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import styles from './home.local.less';
import One from './_01/one';
import Two from './_02/two';
import Three from './_03/three';

const Home = () => (
    <Router>
        <div className={styles.twoColumns}>
            <nav className={styles.column}>
                <NavLink to="/one" activeClassName={styles.activeNav}>One</NavLink>
                <NavLink to="/two" activeClassName={styles.activeNav}>Two</NavLink>
                <NavLink to="/three" activeClassName={styles.activeNav}>Three</NavLink>
            </nav>
            <div className={styles.content}>
                <Switch>
                    <Route path="/one" component={One} />
                    <Route path="/two" component={Two} />
                    <Route path="/three" component={Three} />
                </Switch>
            </div>
        </div>
    </Router>
);

export default Home;
