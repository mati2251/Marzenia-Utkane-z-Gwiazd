import React from "react"
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import {graphql} from "gatsby";
import Sponsor from "../components/Sponsor/Sponsor";
import stylesFromArtist from "../components/Artists/Artisits.module.scss"

const sponsorzy = ({data}) => {

	const sposnsorsJSX = data.data.sponsorzies.map((item) => {
		return(
			<Sponsor logo={item.logo.url} url={item.link} >{item.nazwa}</Sponsor> )
	})

	return (
		<Layout>
				<h1>Sponsorzy i Partnerzy</h1>
				<h2 style={{"fontStyle": "italic"}}>Bez nich było by trudno zorganizować nasz koncert. Pomoc jaką oferują jest różna ale na pewno bardzo przydatna 😀</h2>
				<div className={styles.sponsors}>
					{sposnsorsJSX}
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
