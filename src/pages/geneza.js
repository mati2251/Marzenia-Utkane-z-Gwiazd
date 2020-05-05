import React from "react"
import Layout from "../components/UI/Layout/Layout"
import style from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import GenesisText from "../components/GenesisText/GenesisText"

const geneza = () => {
  return (
    <Layout>
      <div className={style.indexMain}>
        <h1 style={{"textAlign": "center"}}>Geneza Powstania Koncertu</h1>
        <GenesisText />
        <SponsorSlider />
      </div>
    </Layout>
  )
}

export default geneza
