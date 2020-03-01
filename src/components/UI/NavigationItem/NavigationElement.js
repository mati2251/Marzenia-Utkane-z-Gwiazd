import React from "react"
import styles from "./NavigationElement.module.scss"
import { Link } from "gatsby"

const NavigationElement = props => {
  return (
    <Link
      className={`${styles.header__element} ${props.className}`}
      to={props.toLink}
    >
      <h2>{props.children}</h2>
    </Link>
  )
}

export default NavigationElement
