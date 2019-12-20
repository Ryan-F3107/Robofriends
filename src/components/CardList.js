import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
	return(
		<div>
			{
				robots.map((user, i) => { //for loop generates the card from info from robots.js
					return (
						<Card 
							key ={i}
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
							/>
					);
				})
			}
		</div>
	);
}

export default CardList;

//key prop should be something that doesn't change