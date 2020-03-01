import React from "react"
import Layout from "../components/UI/Layout/Layout"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import styles from "../styles/pages.module.scss"
import Creator from "../components/Creators/Creator/Creator"
import { graphql } from "gatsby"
import stylesFromArtist from "../components/Artists/Artisits.module.scss"

const organizatorzy = ({ data }) => {
  const creatorsJSX = data.data.organizatorzies.map(item => {
    return (
      <Creator
        name={item.imie}
        description={item.opis}
        image={item.zdjecie.url}
      />
    )
  })

  console.log(creatorsJSX)

  return (
    <Layout>
      <div className={stylesFromArtist.Artists__Container}>{creatorsJSX}</div>
      <div className={styles.indexMain}>
        <SponsorSlider />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    data {
      organizatorzies {
        imie
        opis
        zdjecie {
          url
        }
      }
    }
  }
`

export default organizatorzy
