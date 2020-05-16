import {CHANGE_SEARCH_FIELD} from './constant.js'	//good practise to find error

// An action is an object that we created

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,	//usually CAP is const , standard
	payload: text
})	//it will take text and return an object and send a text to user as payload
// () used, it significants returning something.
