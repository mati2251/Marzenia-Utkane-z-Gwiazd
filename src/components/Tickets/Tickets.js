import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SponsorSlider from "../SponsorsSlider/SponsorsSlider"
import styles from "./Tickets.module.scss"

const Tickets = () => {
  const query = useStaticQuery(
    graphql`
      query {
        data {
          bileties {
            platformaZdjecie {
              url
            }
            tekst
            link
          }
        }
      }
    `
  )

  return (
    <>
      <h2 className={`${styles.headerStyle} ${styles.Tickets__label}`}>
        Bilety
      </h2>
      <div className={styles.Tickets__container}>
        {query.data.bileties[0].platformaZdjecie !== null ? (
          <img
            src={query.data.bileties[0].platformaZdjecie.url}
            className={styles.Tickets__image}
            alt="Logo platformy do sprzedaży"
          />
        ) : null}
        <h2 className={styles.Tickets__label}>
          {query.data.bileties[0].tekst}
          {query.data.bileties[0].link !== null ? (
            <a href={query.data.bileties[0].link}>
              Kliknij link aby dowiedzieć się wiecej
            </a>
          ) : null}
        </h2>
      </div>
      <SponsorSlider />
    </>
  )
}

export default Tickets
