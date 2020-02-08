import React from "react"
import style from "./Artist.module.scss"

const Artist = (props) => {
    return (
      <div className={style.artist}>
        <img alt="Artysta" src={props.photo} />
        <div>{props.name}</div>
        <div>{props.description}</div>
    </div>
    )
}

export default Artist