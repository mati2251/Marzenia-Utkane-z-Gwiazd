import React from "react"
import Layout from "../components/UI/Layout/Layout"
import style from "../styles/index.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import {graphql, useStaticQuery} from "gatsby";

const geneza = () => {

	// const query = useStaticQuery(
	// graphql`
    //     query {
    //         data {
    //             genezas {
    //                 id,
    //                 tekst,
    //                 zdjecie
    //             }
    //         }
    //     }`);

    return (
      <Layout>
          <div className={style.indexMain}>
              <h1>Geneza Powstania Koncertu</h1>
              <SponsorSlider/>
          </div>
      </Layout>
    )
}

export default geneza
