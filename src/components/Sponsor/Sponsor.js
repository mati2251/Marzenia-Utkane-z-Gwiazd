import React from 'react';
import style from './Sponsor.module.scss'

const Sponsor = (props) => {
	return (
		<div style={{"display": "flex"}}>
			<div>
				<a href={props.url} target="_blank"
				   rel="noopener noreferrer" className={style.sponsor}>
					<img src={props.logo} alt={props.children}/>
					<h3>{props.children}</h3>
				</a>
				<div className={style.sponsor__borderBlackHorizontal}/>
			</div>
			<div className={style.sponsor__borderBlackVertical}/>
			<div className={style.sponsor__dotWhite}/>
		</div>
	)
}

export default Sponsor;
