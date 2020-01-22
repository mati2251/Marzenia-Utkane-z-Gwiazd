import React from "react"
import styles from "./NavigationElement.module.scss"
import {Link} from 'gatsby';

const NavigationElement = (props) => {
  return(
    <Link className={styles.header__element} to={props.toLink}>
      <h3>
      {props.children}
      </h3>
      <div/>
    </Link>
  )
}

export default NavigationElement;