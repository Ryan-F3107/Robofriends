import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {searchRobots} from './reducers';
import 'tachyons'; //Helps with CSS
//import {robots} from './robots';
// the store can be accessed and passed to App
const store = createStore(searchRobots);	//we want to combine all the reducer into rootreducer

ReactDOM.render(
				<Provider store={store}> 
					<App/>
				</Provider>, document.getElementById('root'));	//Provider passes store to the components of the app tree

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Info about Connect from react-redux
//connect function from redux is optomised to avoid using store.subscribe.
//
// Information on Provider
//It passes the store to the components