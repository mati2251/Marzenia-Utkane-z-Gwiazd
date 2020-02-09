import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import Artists from "../components/Artists/Artists"

const artysci = (props) => {
    return (
      <Layout>
          <div className={styles.artist}>
              <Artists year={props.location.search}/>
              <div className={styles.indexMain}>
                  <SponsorSlider/>
              </div>
          </div>
      </Layout>
    )
}

export default artysci
