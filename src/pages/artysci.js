import React from "react"
import Layout from "../components/UI/Layout/Layout"
import Artists from "../components/Artists/Artists"

const artysci = (props) => {
    return (
      <Layout>
          <Artists year={props.location.search} location={props.path}/>
      </Layout>
    )
}

export default artysci
