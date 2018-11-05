import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];

/*
****
If you have redux dev tool extension in your browser, then you can uncomment the below line and comment the other one.
****
*/

// const store = createStore(rootReducer, compose(applyMiddleware(...middleware) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
