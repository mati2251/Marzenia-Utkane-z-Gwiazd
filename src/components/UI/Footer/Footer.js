import React from "react"
import whiteLogo from "../../../resources/logoWhite.png"
import styles from "./Footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.footer__title}>
      <img src={whiteLogo} className={styles.footer__titleLogo} alt="białe logo"/>
      <h3>Marzenia Utkane z Gwiazd</h3>
    </section>
    <section className={styles.footer__main}>
      <div className={styles.footer__mainColumn}>
        <h4>Sponsorzy i Partnerzy: </h4>
        <a href="http://www.google.com" className={styles.footer__mainElementDark}>Sponsorzy</a>
        <a href="http://www.google.com" className={styles.footer__mainElementDark}>Sponsorzy</a>
        <a href="http://www.google.com" className={styles.footer__mainElementDark}>Sponsorzy</a>
        <a href="http://www.google.com" className={styles.footer__mainElementDark}>Sponsorzy</a>
        <a href="http://www.google.com" className={styles.footer__mainElementDark}>Sponsorzy</a>
      </div>
      <div>
        <h4>Kontakt:</h4>
        <div className={styles.footer__mainColumnContact}>
          <div>
            <h4 className={`${styles.footer__mainElementDark} ${styles.footer__mainContactElement}`}>Mail:</h4>
            <h4 className={`${styles.footer__mainElementDark} ${styles.footer__mainContactElement}`}>Numer Telefonu:</h4>
          </div>
          <div>
            <h4 className={styles.footer__mainElementDark}>mail@example.com</h4>
            <h4 className={styles.footer__mainElementDark}>+48 666 666 666</h4>
          </div>
        </div>
      </div>
      <div>
        <h4>Social Media:</h4>
        <h4 className={styles.footer__mainElementDark}>Sponsorzy</h4>
        <h4 className={styles.footer__mainElementDark}>Sponsorzy</h4>
      </div>
    </section>
    <section className={styles.footer__allRightReserved}>
      <h4>© Wszelkie Prawa Zastrzeżona</h4>
    </section>
  </footer>
)

export default Footer