import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// //REDUCERS
// const reducer = (state = 0, action) => {
//     console.log('reducer!');
//     return state;
// }

const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    }
    return state;
}


//STORE

const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
        }
    ),
    applyMiddleware(logger)
);



ReactDOM.render(
    //WRAP ENTIRE APP IN PROVIDER
    <Provider store={storeInstance}>
        <App />,
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
