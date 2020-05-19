import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import {setSearchField, requestRobots} from '../action';
//searchfield is going to be used as props for the app component is going to come from state.searchRobots.searchfield in reducer.js
const mapStateToProps = (state) => {
	return {	//State has only one field
		searchField: state.searchRobots.searchField,//told what state to listen to and send as props
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {//event is the input
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}	
}

class App extends Component {
	
	componentDidMount() {
		this.props.onRequestRobots(); 
	}//goes to website 

	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props;
		console.log(searchField);
		// A new array is basically created
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase()); //if the robot includes anything in the seach box
		})
		return isPending ?
			<h1 className ='tc'>Loading</h1> :
			(
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
		
	}	//end of render
}	//end of class App

export default connect(mapStateToProps, mapDispatchToProps)(App);	//connect is a higher order function.

// These comments are to help me understand what I'm doing and how things work with redux and react.
//connect will run with the two parameters and then give those props to App.
//connect will run and return another function
//connect takes in two parameters
// Right now we have connect to the App component and subscribed to any state changes in the redux store.
//Now App knows that a redux store exist and now we have to tell App what to listen too.