import React from "react";
import Layout from "../components/UI/Layout/Layout";
import styles from "../styles/pages.module.scss"
import stylesGenesis from "../components/GenesisText/GenesisText.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider";
import {graphql, Link, navigate} from "gatsby";
import ImageGallery from "react-image-gallery";
import thumbnails from "../components/Thumbnails/Thumbnails"

const koncert = (props) => {
	if (props.location.search !== "") {
		const httpQuery = props.location.search.split('?')[1].split('=');
		const yearIndex = httpQuery.indexOf('rok') + 1;
		const year = httpQuery[yearIndex];
		const yearDetails = props.data.data.roks.filter((item) => {
			return item.value === year
		})[0];
		if (yearDetails !== undefined) {
			const images = yearDetails.zdjecia.map((item) => {
				return {original: item.url, thumbnail: thumbnails(item.id)}
			})
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
						{(yearDetails.celZdjecie !== undefined && yearDetails.tekstCel !== undefined) ?
							<>
								<h1>Cel charytatywny Koncertu</h1>
								<div className={stylesGenesis.GenesisText__photo}>
									<img
										src={yearDetails.celZdjecie.url}
										alt="Marzenia Utkane z Gwiazd"
									/>
								</div>
								<h2>{yearDetails.tekstCel}</h2>
							</>
							: null
						}
						{(yearDetails.yt !== undefined) ?
							<>
								<h1>Wideo z koncertu</h1>
								<div className={stylesGenesis.GenesisText__photo}>
									<div className={styles.yt__video}>
										<iframe height="100%" width="100%" src={yearDetails.yt}
										        frameBorder="0"
										        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
										        allowFullScreen/>
									</div>
								</div>
							</>
							: null
						}
						{images.length !== 0 ?
							<>
								<h1>Zdjecia</h1>
								<ImageGallery items={images}/>
							</>
							: null
						}
						<SponsorSlider/>
					</div>
				</Layout>
			)
		} else {
			return (
				<Layout>
					<div className={styles.indexMain}>
						<h2>Jeszcze nie było takiego koncertu <span role="img">😄</span></h2>
						<h2><Link to="/koncerty">Cofnij się do zakładki koncerty aby poprawnie wybrać edycję</Link></h2>
						<SponsorSlider/>
					</div>
				</Layout>
			)
		}
	} else {
		return (
			<Layout>
				<div className={styles.indexMain}>
					<h2>Jeszcze nie było takiego koncertu <span role="img">😄</span></h2>
					<h2><Link to="/koncerty">Cofnij się do zakładki koncerty aby poprawnie wybrać edycję</Link></h2>
					<SponsorSlider/>
				</div>
			</Layout>
		)
	}
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
                yt
                celZdjecie {
                    url
                }
                zdjecia {
                    url
                    id
                }
                zdjecieGlowne {
                    url
                }
            }
        }
    }

`


export default koncert;
