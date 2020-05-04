import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import {graphql} from "gatsby";
import Sponsor from "../components/Sponsor/Sponsor";

const sponsorzy = ({data}) => {

	return (
		<Layout>
				<h1>Sponsorzy i Partnerzy</h1>
				<h2>Bez nich było by trudno zorganizować nasz koncert. Pomoc jaką oferują jest różna ale na pewno bardzo przydatna 😀</h2>
				<div className={styles.sponsors}>
					<Sponsor logo={data.data.sponsorzies[0].logo.url}
					         url={data.data.sponsorzies[0].link}>{data.data.sponsorzies[0].nazwa}</Sponsor>
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
