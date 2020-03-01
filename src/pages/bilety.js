import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import Tickets from "../components/Tickets/Tickets"

const bilety = () => {
  return (
    <Layout>
      <div className={styles.indexMain}>
        <Tickets />
      </div>
    </Layout>
  )
}

export default bilety
