import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import Artists from "../components/Artists/Artists"

const artysci = (props) => {
    const params = props.location.search.split("=");
    const year = params[1]

    return (
      <Layout>
          <div className={styles.indexMain}>
              <h1>Strona w trakcie budowy</h1>
              <SponsorSlider/>
          </div>
      </Layout>
    )
};

export default artysci
