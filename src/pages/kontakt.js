import React from 'react'
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"

const kontakt = () => {
    return(
      <Layout>
          <div className={styles.indexMain}>
              <SponsorSlider/>
          </div>
      </Layout>
    )
}

export default kontakt;