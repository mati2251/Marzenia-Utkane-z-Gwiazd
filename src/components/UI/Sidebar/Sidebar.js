import React from "react";
import logo from "../../../resources/logo.png"
import { Link } from "gatsby"
import styles from "./Sidebar.module.scss"

const Sidebar = () => {
  return(
    <header  className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo"/>
        <h3>Marzenia Utkane z Gwiazd</h3>
      </Link>
    </header>
  )
}

export default Sidebar