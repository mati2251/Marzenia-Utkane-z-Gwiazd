import React from "react"
import style from "./Artist.module.scss"

const Artist = props => {
	return (
		<div className={style.artist}>
			<img src={props.image} alt={props.name}/>
			<div className={style.artist__nameDescription}>
				<h2>{props.name}</h2>
				<h3 className={style.artist__description}>{props.description}</h3>
				{props.link !== null ?
					<a target="_blank"
					   rel="noopener noreferrer"
					   href={props.link}>
						<h3> Dowiedz się wiecej</h3>
					</a> : null}
			</div>
			<div className={style.artistBlackBorder}/>
		</div>
	)
}

export default Artist
