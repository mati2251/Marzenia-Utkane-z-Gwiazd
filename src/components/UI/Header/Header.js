import React from "react"
import NavigationElement from "../NavigationItem/NavigationElement"
import styles from "./Header.module.scss"
import logo from "../../../resources/logo.png"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__title}>
        <img src={logo} alt="logo" className={styles.header__titleLogo}/>
        <h3>Marzenia Utkane z Gwiazd</h3>
      </Link>
      <div className={styles.header__navigationPanel}>
        <NavigationElement toLink="geneza">Geneza</NavigationElement>
        <NavigationElement toLink="artysci">Artyści</NavigationElement>
        <NavigationElement toLink="bilety">Bilety</NavigationElement>
        <NavigationElement toLink="kontakt">Twórcy</NavigationElement>
        <NavigationElement toLink="organizatorzy" bigger={true}>Organizatorzy</NavigationElement>
      </div>
    </header>
  )
}

export default Header