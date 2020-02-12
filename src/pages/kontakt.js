import React from 'react'
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"

const kontakt = () => {
    return(
      <Layout>
          <div className={styles.indexMain}>
              <h1>Kontakt</h1>
              <div>
                  <h2>E-Mail</h2>
                  <h2>Numer Telefony</h2>
              </div>
              <div>
                  <h2>mail@example.com</h2>
                  <h2>+48 666 666 666</h2>
              </div>
              <SponsorSlider/>
          </div>
      </Layout>
    )
}

export default kontakt;