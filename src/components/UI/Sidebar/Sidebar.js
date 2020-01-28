import React from "react"
import logo from "../../../resources/logo.png"
import { Link } from "gatsby"
import styles from "./Sidebar.module.scss"
import { MdMenu, MdClose } from "react-icons/md"
import NavigationElement from "../NavigationItem/NavigationElement"
import { useState } from "react"

const linkLabel = [{ label: "Geneza", toLink: "geneza" },
    { label: "Artyści", toLink: "artysci" },
    { label: "Bilety", toLink: "bilety" },
    { label: "Organizatorzy", toLink: "organizatorzy" },
    { label: "Kontakt", toLink: "kontakt" }]

const allLinks = linkLabel.map((element) => {
      return (<NavigationElement toLink={element.toLink} key={element.toLink}
                                 className={styles.aside__navigationElement}>{element.label}</NavigationElement>)
  },
)

const Sidebar = () => {

    const [asideStyle, setAsideStyle] = useState(styles.asideClose)

    return (
      <>
          <header className={styles.sidebar}>
              <div className={styles.header}>
                  <Link to="/" className={styles.header__link}>
                      <img src={logo} alt="logo" className={styles.header__logo}/>
                      <h2>Marzenia Utkane z Gwiazd</h2>
                  </Link>
                  <button className={styles.header__openLogoButton} onClick={() => {
                      setAsideStyle(styles.asideOpen)
                  }}><MdMenu className={styles.header__openLogo}/></button>
              </div>
          </header>
          <aside className={asideStyle}>
              <button className={styles.aside__closeMenuButton} onClick={() => {
                  setAsideStyle(styles.asideClose)
              }}>
                  <MdClose className={styles.aside__closeMenu}/>
              </button>
              {allLinks}
          </aside>
      </>
    )
}

export default Sidebar