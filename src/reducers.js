import { CHANGE_SEARCH_FIELD } from './constant.js';
const initialState = {
	searchField: ''
}
//Now we create a reducer that outputs a state
//actions are just objects that we are returning 
// we give the two parameters default values using ES6 
// REDUCER
export const searchRobots = (state=initialState, action={})	=> {
	//we act upon the state based on action
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload});	//we return a new state, we pass the third parameter as an object so we have it in a {}
		default:
			return state;	//we could have used an if statement
	}	//end of switch statement.	
}
