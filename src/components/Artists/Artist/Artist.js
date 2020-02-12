import React from "react"
import style from "./Artist.module.scss"

const Artist = (props) => {
    return (
      <div className={style.artist}>
          <img src={props.image} alt="Artyści"/>
          <div className={style.artist__nameDescription}>
              <h2>{props.name}</h2>
              <h3>{props.description}</h3>
              <a href="http://www.google.com"><h3> Wiecej o mnie </h3></a>
          </div>
          <div className={style.artistBlackBorder}/>
      </div>
    )
}

export default Artist