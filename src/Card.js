import React from 'react';
/* tachiyon animation is used which is a part of css
grow is the animation 
${props.id} generates something random that gets put into the id property from the robot.js file
*/

const Card = ({ name, email, id }) => {
	return (
		<div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' > 
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;