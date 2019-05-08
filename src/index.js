import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const addPet = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_PET':
            return action.payload;
        default:
            return state;
    }
}
// redux 
const storeInstance = createStore(
    combineReducers({
        addpet,
    }),
    applyMiddleware(logger),
 );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
