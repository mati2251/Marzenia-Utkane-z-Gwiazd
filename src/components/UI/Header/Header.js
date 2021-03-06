import React from "react"
import NavigationElement from "../NavigationItem/NavigationElement"
import styles from "./Header.module.scss"
import logo from "../../../resources/logo.png"
import { Link } from "gatsby"

const linkLabel = [
  {label: "Geneza", toLink: "/geneza"},
  {label: "Koncerty", toLink: "/koncerty"},
  {label: "Bilety", toLink: "/bilety"},
  {label: "Organizatorzy", toLink: "/organizatorzy"},
  {label: "Sponsorzy", toLink: "/sponsorzy"},
  {label: "Kontakt", toLink: "/kontakt"},
]

const Header = ({ className }) => {
  const allLinks = linkLabel.map(element => {
    return (
      <NavigationElement
        toLink={element.toLink}
        className={styles.header__navigationElement}
        key={element.toLink}Sponsorzy
      >
        {element.label}
      </NavigationElement>
    )
  })

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__title}>
        <img src={logo} alt="logo" className={styles.header__titleLogo} />
        <h2>Marzenia Utkane z Gwiazd</h2>
      </Link>
      <div className={styles.header__navigationPanel}>{allLinks}</div>
    </header>
  )
}

export default Header
