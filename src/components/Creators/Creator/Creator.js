import React from "react";
import style from "./Creator.module.scss";

const Creator = (props) => {
	return (
		<div>
			<div className={style.creator}>
				<img src={props.image} alt="Organizator"/>
				<div className={style.creator__nameDescription}>
					<h2>{props.name}</h2>
					<h3>{props.description}</h3>
				</div>
				<div className={style.creatorBlackBorder}/>
			</div>
		</div>
	)
};

export default Creator;
