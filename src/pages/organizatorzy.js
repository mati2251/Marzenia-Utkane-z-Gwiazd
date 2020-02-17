import React from "react"
import Layout from "../components/UI/Layout/Layout"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import styles from "../styles/pages.module.scss"
import Creator from "../components/Creators/Creator/Creator";

const organizatorzy = () => {
    return (
      <Layout>
          <div className={styles.indexMain}>
              <Creator name="Mateusz Karłowski" description="Uczeń Technikum Informatycznego twórca stronny internetowej"/>
              <SponsorSlider/>
          </div>
      </Layout>
    )
};

export default organizatorzy
