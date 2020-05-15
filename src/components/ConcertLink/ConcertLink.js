import React from "react";
import {Link} from "gatsby";
import style from './ConcertLink.module.scss'

const ConcertLink = (props) => (
	<Link to={props.to} className={style.link}>
		<div className={style.concertLink}>
			<div className={style.overflowHidden}>
				<img src={props.image} alt={props.name}/>
			</div>
			<h2>{props.name}</h2>
		</div>
	</Link>
)

export default ConcertLink;
