import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import Artist from "../components/Artist/Artist"

const artysci = () => {
    return (
      <Layout>
          <div className={styles.indexMain}>
              <Artist/>
              <SponsorSlider/>
          </div>
      </Layout>
    )
}

export default artysci