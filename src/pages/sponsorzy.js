import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import {graphql} from "gatsby";
import Sponsor from "../components/Sponsor/Sponsor";

const sponsorzy = ({data}) => {

	return (
		<Layout>
			<div className={styles.indexMain}>
				<h1>Sponsorzy i Partnerzy</h1>
				<h2>Bez nich było by trudno zorganizować nasz koncert. Niektórzy służą pomocą. Inni służa promocją a jeszcze inni pomocą finansową. Z czego jesteśmy bardzo zadowoleni 😀 !!!</h2>
				<Sponsor logo={data.data.sponsorzies[0].logo.url}>{data.data.sponsorzies[0].nazwa}</Sponsor>
			</div>
		</Layout>
	)
}

export const sponsors = graphql`
    query {
        data {
            sponsorzies {
                link
                nazwa
                logo {
                    url
                }
            }
        }
    }
`

export default sponsorzy;
