// this file is called to get data for the rental 
// this page further call data.js which has got all the data 
import {createStore, combineReducers, applyMiddleware,compose } from "redux"; // install redux npm and import this function
import thunk from 'redux-thunk';  // install redux thunk and import 
import rentals from './reducers/rentals';
import rental from './reducers/rental';
import auth from './reducers/auth';

export function initStore () {
    // Pure Functions
    const reducers = combineReducers({
        rentals,
        rental,
        auth
    });

    const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers (applyMiddleware(thunk)));
    


    return store;
}