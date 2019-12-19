import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
class App extends React.Component {
	constructor() {
		super()
		this.state = {	//two states, any component that has state while use this.state, it describes the App
			robots: robots,
			searchfield: ''
		}	//react renders and uses these states as props
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})	//anytime we want to change state in React
		
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{ // A new array is basically created
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //if the robot includes anything in the seach box
		})
		return (
			<div className='tc'>
				<h1 className = 'f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
}

export default App;