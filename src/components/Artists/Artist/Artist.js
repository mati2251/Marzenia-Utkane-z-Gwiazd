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
					<a href={props.link}>
						<h3> Wiecej o mnie </h3>
					</a> : null}
			</div>
			<div className={style.artistBlackBorder}/>
		</div>
	)
}

export default Artist
