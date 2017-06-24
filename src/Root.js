import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'normalize.css/normalize.css';
import './global-styles';

import App from './components/App';
import Meet from './containers/Meet.js';

import store from './store';
import theme from './theme';

const history = syncHistoryWithStore(browserHistory, store);

export default () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App>
                <Router history={history}>
                    <Route path='/' component={Meet}/>
                </Router>
            </App>
         </ThemeProvider>
    </Provider>
);