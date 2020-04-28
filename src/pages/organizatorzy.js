import React from "react"
import Layout from "../components/UI/Layout/Layout"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import styles from "../styles/pages.module.scss"
import Creator from "../components/Creators/Creator/Creator"
import {graphql} from "gatsby"
import stylesFromArtist from "../components/Artists/Artisits.module.scss"

const organizatorzy = ({data}) => {

	const headCreatorsJSX = data.data.organizatorzies.filter(item => item.zalozyciel === true).map(item => {
		return (
			<Creator
				key={item.id}
				name={item.imie}
				description={item.opis}
				image={item.zdjecie.url}
			/>
		)
	})

	const creatorsJSX = data.data.organizatorzies.filter(item => item.zalozyciel === false).map(item => {
		return (
			<Creator
				key={item.id}
				name={item.imie}
				description={item.opis}
				image={item.zdjecie.url}
			/>
		)
	})


	return (
		<Layout>
			<div>
				<h1>Organizatorzy założyciele</h1>
				<div className={stylesFromArtist.Artists__Container}>
				{headCreatorsJSX}
				</div>
				<h1>Pozostali Organizatorzy</h1>
				<div className={stylesFromArtist.Artists__Container}>
				{creatorsJSX}
				</div>
			</div>
			<div className={styles.indexMain}>
				<SponsorSlider/>
			</div>
		</Layout>
	)
}

export const query = graphql`
    query {
        data {
            organizatorzies {
                id
                imie
                opis
                zalozyciel
                zdjecie {
                    url
                }
            }
        }
    }
`

export default organizatorzy
