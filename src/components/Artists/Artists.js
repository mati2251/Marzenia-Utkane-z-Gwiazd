import React from "react"
import styles from "./Artisits.module.scss"
import style from "../../styles/pages.module.scss"
import {graphql, navigate} from "gatsby"
import {useStaticQuery} from "gatsby"
import Artist from "./Artist/Artist"
import SponsorSlider from "../SponsorsSlider/SponsorsSlider"

const Artists = (props) => {

	const query = useStaticQuery(graphql`
        query {
            data {
                roks {
                    artyscis {
                        nazwa
                        opis
                        id
                        link
                        zdjecie {
                            url
                        }
                    }
                    rok
                }
            }
        }
	`);

	const yearsJSX = query.data.roks.map((item) => {
			return (<option value={item.rok} key={item.rok}>{item.rok}</option>)
		},
	);

	const prop = props.year.split("=");
	let year = prop[1];
	if (props.year === "") {
		year = Math.max(...query.data.roks.map((item) => {
			return item.rok
		})).toString()
	}

	const artistsJSX = query.data.roks.filter((item) => item.rok === year)[0].artyscis.map((item) => {
		return <Artist name={item.nazwa} key={item.id} description={item.opis} link={item.link} image={item.zdjecie.url}/>
	});

	return (
		<div className={styles.container}>
			<h2 className={styles.Artist__labelContainer}>
				Edycja Koncertu
				<select onClick={(value) => navigate(`/artysci?rok=${value.target.value}`)}>
					{yearsJSX}
				</select>
			</h2>
			<div className={styles.Artists__Container}>
				{artistsJSX}
			</div>
			<div className={style.indexMain}>
				<SponsorSlider/>
			</div>
		</div>
	)
};

export default Artists
