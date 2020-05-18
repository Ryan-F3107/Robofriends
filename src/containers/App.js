import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import {setSearchField} from '../action';
//searchfield is going to be used as props for the app component is going to come from state.searchRobots.searchfield in reducer.js
const mapStateToProps = (state) => {
	return {	//State has only one field
		searchField: state.searchField//told what state to listen to and send as props
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}	//event is the input
}

class App extends Component {
	constructor() {
		super()
		this.state = {	//two states, any component that has state while use this.state, it describes the App
			robots: []
		}	//react renders and uses these states as props
	}	//end of constructor

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users') //fetch comes with all browsers and makes request to servers
			.then(response => response.json()) //converts response into json
			.then(users => this.setState({robots: users})); //info about robots are now recieved from the website 
	}//goes to website 

	render() {
		const { robots } = this.state;
		const {searchField, onSearchChange} = this.props;
		console.log(searchField);
		// A new array is basically created
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase()); //if the robot includes anything in the seach box
		})
		if (this.state.robots.length === 0) {
			return <h1 className ='tc'>Loading</h1>
		}
		else{
			return (
			<div className='tc'>
				<h1 className = 'f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);	//connect is a higher order function.

// These comments are to help me understand what I'm doing and how things work with redux and react.
//connect will run with the two parameters and then give those props to App.
//connect will run and return another function
//connect takes in two parameters
// Right now we have connect to the App component and subscribed to any state changes in the redux store.
//Now App knows that a redux store exist and now we have to tell App what to listen too.