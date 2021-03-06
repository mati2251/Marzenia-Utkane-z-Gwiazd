import React from "react"
import style from "./Creator.module.scss"

const Creator = props => {
  return (
    <div className={style.creator}>
      <img src={props.image} alt={props.name} />
      <div className={style.creator__nameDescription}>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
      <div className={style.creatorBlackBorder} />
    </div>
  )
}

export default Creator
