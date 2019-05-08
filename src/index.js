import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';



const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// redux 
const storeInstance = createStore(
    combineReducers({
        rootReducer
    }),
    applyMiddleware(...middlewareList),
 );

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
