import React from "react"
import whiteLogo from "../../../resources/logoWhite.png"
import styles from "./Footer.module.scss"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        data {
          sponsorzies {
            id
            link
            nazwa
          }
        }
      }
    `
  )

  const sponsors = data.data.sponsorzies
  const firstColumn = []
  const secondColumn = []
  let howManyPerColumn = sponsors.length
  if (howManyPerColumn > 12) {
    howManyPerColumn = Math.round(sponsors.length / 2)
  }
  sponsors.forEach((item, index) => {
    if (index < howManyPerColumn) {
      firstColumn.push(
        <a
          href={item.link}
          className={styles.footer__mainElementDark}
          key={item.id}
        >
          <h3>{item.nazwa}</h3>
        </a>
      )
    } else {
      secondColumn.push(
        <a
          href={item.link}
          className={styles.footer__mainElementDark}
          key={item.id}
        >
          <h3>{item.nazwa}</h3>
        </a>
      )
    }
  })

  const sponsorsJsx = (
    <div className={styles.footer__mainSponsorsRowDirection}>
      <div className={styles.footer__mainSponsorsColumn}>{firstColumn}</div>
      {secondColumn !== undefined ? (
        <div className={styles.footer__mainSponsorsColumn}>{secondColumn}</div>
      ) : null}
    </div>
  )

  return (
    <footer className={styles.footer}>
      <section className={styles.footer__title}>
        <img
          src={whiteLogo}
          className={styles.footer__titleLogo}
          alt="białe logo"
        />
        <h2>Marzenia Utkane z Gwiazd</h2>
      </section>
      <section className={styles.footer__main}>
        <div className={styles.footer__mainColumn}>
          <h3>Sponsorzy i Partnerzy: </h3>
          {sponsorsJsx}
        </div>
        <div className={styles.footer__mainColumn}>
          <h3>Kontakt:</h3>
          <div className={styles.footer__mainColumnContact}>
            <div>
              <h3
                className={`${styles.footer__mainElementDark} ${styles.footer__mainContactElement}`}
              >
                Mail:
              </h3>
              <h3
                className={`${styles.footer__mainElementDark} ${styles.footer__mainContactElement}`}
              >
                Numer Telefonu:
              </h3>
            </div>
            <div>
              <h3 className={styles.footer__mainElementDark}>
                mail@example.com
              </h3>
              <h3 className={styles.footer__mainElementDark}>
                +48 666 666 666
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.footer__mainColumn}>
          <h3>Social Media:</h3>
          <a
            href="https://www.facebook.com/marzeniautkanezgwiazd/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__mainElementDark}
          >
            <FaFacebook className={styles.footer__mainSocialIcon} />{" "}
            <h3> Facebook </h3>
          </a>
          <a
            href="https://www.instagram.com/marzeniautkanezgwiazd/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__mainElementDark}
          >
            <FaInstagram className={styles.footer__mainSocialIcon} />{" "}
            <h3> Instagram </h3>
          </a>
          <a
            href="https://www.youtube.com/channel/UC4GqrrJdK-Dfg15coY3RslA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__mainElementDark}
          >
            <FaYoutube className={styles.footer__mainSocialIcon} />{" "}
            <h3> YouTube </h3>
          </a>
        </div>
      </section>
      <section className={styles.footer__allRightReserved}>
        <h3>© Wszelkie Prawa Zastrzeżona</h3>
      </section>
    </footer>
  )
}

export default Footer
