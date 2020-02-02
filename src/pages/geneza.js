import React from "react"
import Layout from "../components/UI/Layout/Layout"
import style from "../styles/index.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"

const geneza = () => {
    return (
      <Layout>
          <div className={style.indexMain}>
              <SponsorSlider/>
          </div>
      </Layout>
    )
}

export default geneza