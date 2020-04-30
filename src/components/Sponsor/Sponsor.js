import React from 'react';

const Sponsor = (props) => {
	console.log(props)
	return (
		<a>
			<h2>{props.children}</h2>
			<img src={props.logo} alt={props.children}/>
		</a>
	)
}

export default Sponsor;
