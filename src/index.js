import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, CombineReducers} from 'redux';
import {Provider} from 'react-redux';

//REDUCERS
const reducer = (state = 0, action) => {
    console.log('reducer!');
    return state;
}


//STORE
const storeInstance = createStore(
    //reducer,
    //reducer2,
    //reducer3,
)



ReactDOM.render(
    //WRAP ENTIRE APP IN PROVIDER
    <Provider>
        <App />,
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
