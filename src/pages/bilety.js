import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from '../styles/pages.module.scss'
import { graphql, useStaticQuery } from "gatsby"


const bilety = () => {

    return (
      <Layout>
          <div className={styles.indexMain}>
              <h1 className={styles.headerStyle}>Bilety</h1>
          </div>
      </Layout>
    )
}

export default bilety