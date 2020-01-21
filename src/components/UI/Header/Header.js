import React from "react"
import NavigationElement from "../NavigationItem/NavigationElement"
import styles from "./Header.module.scss"
import logo from "../../../resources/logo.png"

const linkLabel = [{ label: "Geneza", toLink: "geneza" },
  { label: "Artyści", toLink: "artysci" },
  { label: "Bilety", toLink: "bilety" },
  { label: "Twórcy", toLink: "tworcy" },
  { label: "Kontakt", toLink: "kontakt" }]

const Header = () => {
  let allLinks = linkLabel.map((element) => {
      return (<NavigationElement toLink={element.toLink}>{element.label}</NavigationElement>)
    },
  )
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo"/>
      {allLinks}
    </header>
  )
}

export default Header