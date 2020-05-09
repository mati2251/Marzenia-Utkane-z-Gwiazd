import React from "react";
import Layout from "../components/UI/Layout/Layout";
import styles from "../styles/pages.module.scss"
import stylesGenesis from "../components/GenesisText/GenesisText.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider";
import {graphql, Link, navigate} from "gatsby";

const koncert = (props) => {
	if (props.location.search !== "") {
		const httpQuery = props.location.search.split('?')[1].split('=');
		const yearIndex = httpQuery.indexOf('rok') + 1;
		const year = httpQuery[yearIndex];
		const yearDetails = props.data.data.roks.filter((item) => {
			return item.value === year
		})[0];
		console.log(yearDetails)
		return (
			<Layout>
				<h1>Koncert {yearDetails.rok}</h1>
				<h2 style={{fontStyle: "italic"}}>{yearDetails.krotkiOpis}</h2>
				<div className={styles.indexMain}>
					<div className={stylesGenesis.GenesisText__photo}>
						<img
							src={yearDetails.zdjecieGlowne.url}
							alt="Marzenia Utkane z Gwiazd"
						/>
					</div>
					<h2>{yearDetails.tekstKoncert}</h2>
					<h2><Link to={`/artysci?rok=${yearDetails.value}`}>Zobacz artystów tej edycji</Link></h2>
					<h1>Cel charytatywny Koncertu</h1>
					<div className={stylesGenesis.GenesisText__photo}>
						<img
							src={yearDetails.celZdjecie.url}
							alt="Marzenia Utkane z Gwiazd"
						/>
					</div>
					<h2>{yearDetails.tekstCel}</h2>
					<h1>Wideo z koncertu</h1>
					<div>
						<iframe height="auto" width="100%" src="https://www.youtube.com/embed/07RcBEHKuW0"
						        frameBorder="0"
						        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
						        allowFullScreen/>
					</div>
					<SponsorSlider/>
				</div>
			</Layout>
		)
	} else {
		navigate("/koncerty").then()
	}
	return (<div/>)
}

export const data = graphql`
    query {
        data {
            roks {
                rok
                tekstCel
                tekstKoncert
                value
                krotkiOpis
                celZdjecie {
                    url
                }
                zdjecia {
                    url
                }
                zdjecieGlowne {
                    url
                }
            }
        }
    }

`


export default koncert;
