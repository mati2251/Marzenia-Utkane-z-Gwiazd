import React from "react"
import styles from "./NavigationElement.module.scss"
import {Link} from 'gatsby';

const NavigationElement = (props) => {
  let style;
  if(props.bigger){
    style=styles.header__elementBigger
  }
  return(
    <Link className={`${styles.header__element} ${style}`} to={props.toLink}>
      <h3 className={styles.header__elementPinkBorder}>
      {props.children}
      </h3>
      <div className={styles.header__elementBlackBorder}/>
    </Link>
  )
}

export default NavigationElement;