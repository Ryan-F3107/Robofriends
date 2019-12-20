import React from 'react';

const Scroll = (props) => { // every single component has the property prop
	return  (
		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;