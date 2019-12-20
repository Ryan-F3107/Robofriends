import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {	//two states, any component that has state while use this.state, it describes the App
			robots: [],
			searchfield: ''
		}	//react renders and uses these states as props
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users') //fetch comes with all browsers and makes request to servers
			.then(response => response.json()) //converts response into json
			.then(users => this.setState({robots: users})); //info about robots are now recieved from the website 
	}//goes to website 

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})	//anytime we want to change state in React
		
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{ // A new array is basically created
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //if the robot includes anything in the seach box
		})
		if (this.state.robots.length === 0) {
			return <h1 className ='tc'>Loading</h1>
		}
		else{
			return (
			<div className='tc'>
				<h1 className = 'f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
		}
	}
}

export default App;