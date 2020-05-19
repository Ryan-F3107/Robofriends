import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED

} from './constant.js'

const initialStateSearch = {
	searchField: ''
}
//Now we create a reducer that outputs a state
//actions are just objects that we are returning 
// we give the two parameters default values using ES6 
// REDUCER
export const searchRobots = (state=initialStateSearch, action={})	=> {
	//we act upon the state based on action
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});	//we return a new state, we pass the third parameter as an object so we have it in a {}
		default:
			return state;	//we could have used an if statement
	}	//end of switch statement.	
}

const instialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=instialStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}