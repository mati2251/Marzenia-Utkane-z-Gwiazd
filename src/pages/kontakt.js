import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import { graphql } from "gatsby"
import img from "../resources/core.png";

const kontakt = props => {
  return (
    <Layout>
      <div className={styles.indexMain}>
        <h1 style={{"textAlign": "center"}} >Kontakt</h1>
        <div className={styles.Contact__imageBlack}>
          <img src={img} className={styles.Contact__image} alt="Core Team"/>
        </div>
        <div className={styles.contact}>
          <div>
            <h2>E-Mail</h2>
            <h2>Numer Telefony</h2>
          </div>
          <div className={styles.contact__column}>
            <h2>{props.data.data.kontakts[0].mail}</h2>
            <h2>{props.data.data.kontakts[0].telefon}</h2>
          </div>
        </div>
        <SponsorSlider />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    data {
      kontakts {
        mail
        telefon
      }
    }
  }
`

export default kontakt
