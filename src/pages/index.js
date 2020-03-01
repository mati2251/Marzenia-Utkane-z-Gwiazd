import React from "react"
import Layout from "../components/UI/Layout/Layout"
import SlideShowPhoto from "../components/SlideShowPhoto/SlideShowPhoto"
import { graphql, Link, useStaticQuery } from "gatsby"
import style from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        data {
          indeksTeksts {
            opisKoncertu
          }
        }
      }
    `
  )

  return (
    <>
      <Layout>
        <div className={style.indexMain}>
          <SlideShowPhoto />
          <SponsorSlider />
          <h4>
            {data.data.indeksTeksts[0].opisKoncertu}
            <br />
            <Link to="geneza">
              {" "}
              Chcesz wiedzieć więcej o koncercie zajrzyj na zakładke{" "}
            </Link>
          </h4>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
