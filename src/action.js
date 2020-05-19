import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED

} from './constant.js'	//good practise to find error

// An action is an object that we created

export const setSearchField = (text) => {
	return {
		type: CHANGE_SEARCH_FIELD,	//usually CAP is const , standard
		payload: text	
	}
}	//it will take text and return an object and send a text to user as payload
// () used, it significants returning something.

// We return a function, and the dispatch is used to call the actions.
// when we get the users we either have a SUCCESS or a FAILED.
export const requestRobots = () => (dispatch) => {	//a higher functions
	dispatch({ type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users') //fetch comes with all browsers and makes request to servers
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}

//dispatch is something that we use in dispatch the props. In App.js
