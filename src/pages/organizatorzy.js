import React from "react"
import Layout from "../components/UI/Layout/Layout"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import styles from "../styles/pages.module.scss"

const organizatorzy = () => {
    return (
      <Layout>
          <div className={styles.indexMain}>
              <SponsorSlider/>
          </div>
      </Layout>
    )
}

export default organizatorzy