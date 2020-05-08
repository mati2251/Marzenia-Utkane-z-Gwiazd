import React from "react";
import Layout from "../components/UI/Layout/Layout";
import {graphql} from "gatsby";
import ConcertLink from "../components/ConcertLink/ConcertLink";
import styles from "../styles/pages.module.scss";
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider";

const koncerty = ({data}) => {
	const concertsJSX = data.data.roks.map((item) => {
		return <ConcertLink value={item.value} image={item.zdjecieGlowne.url} name={item.rok} key={item.value}/>
	})


	return (
		<Layout>
			<h1>Koncerty</h1>
			<h2 style={{"fontStyle": "italic"}}>Zobacz nasze koncerty i ich osiągniecia <span role="img">🎉</span> !
			</h2>
			<div className={styles.concerts__container}>
				{concertsJSX.reverse()}
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
            roks {
                rok
                value
                zdjecieGlowne {
                    url
                }
            }
        }
    }
`

export default koncerty;
