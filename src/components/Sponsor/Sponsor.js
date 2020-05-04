import React from 'react';
import style from './Sponsor.module.scss'

const Sponsor = (props) => {
	return (
		<>
			<div>
				<a href={props.url} target="_blank"
				   rel="noopener noreferrer" className={style.sponsor}>
					<img src={props.logo} alt={props.children}/>
					<h2>{props.children}</h2>
				</a>
				<div className={style.sponsor__borderBlackHorizontal}/>
			</div>
			<div className={style.sponsor__borderBlackVertical}/>
			<div className={style.sponsor__dotWhite}/>
		</>
	)
}

export default Sponsor;
