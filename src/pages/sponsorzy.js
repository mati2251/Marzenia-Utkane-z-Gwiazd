import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import {graphql} from "gatsby";

const sponsorzy = ({sponsors}) => {
	return (
		<Layout>
			<div className={styles.indexMain}>

			</div>
		</Layout>
	)
}

export const sponsors = graphql`
    query {
        data {
            sponsorzies {
                link
                logo {
                    url
                }
            }
        }
    }
`

export default sponsorzy;
