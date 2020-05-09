import React from "react"
import styles from "./Artisits.module.scss"
import style from "../../styles/pages.module.scss"
import {graphql, navigate, useStaticQuery} from "gatsby"
import Artist from "./Artist/Artist"
import SponsorSlider from "../SponsorsSlider/SponsorsSlider"

const Artists = props => {
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
                    value
                    rok
                }
            }
        }
	`)

	const yearsJSX = query.data.roks.map((item,index) => {
		return (
			<option value={item.value} key={item.rok}>
				{item.rok}
			</option>)
	})

	const prop = props.year.split("=")
	let year = prop[1]
	if (props.year === "") {
		year = query.data.roks[query.data.roks.length - 1].value;
	}

	const artistsJSX = query.data.roks
	.filter(item => item.value === year)[0]
	.artyscis.map(item => {
		return (
			<Artist
				name={item.nazwa}
				key={item.id}
				description={item.opis}
				link={item.link}
				image={item.zdjecie.url}
			/>
		)
	})

	return (
		<div className={styles.container}>
			<h1>Artyści</h1>
			<h2 className={styles.Artist__labelContainer}>
				Edycja Koncertu
				<select
					onChange={value => navigate(`/artysci?rok=${value.target.value}`)}
					defaultValue={year}
				>
					{yearsJSX}
				</select>
			</h2>
			<h2 style={{"padding": "20px", "fontStyle": "italic"}}>To oni są odpowiedzialni za rorywkę na naszych koncertach. Robią to świetnie. Sprawdźcie sami!</h2>

			<div className={styles.Artists__Container}>{artistsJSX}</div>
			<div className={style.indexMain}>
				<SponsorSlider/>
			</div>
		</div>
	)
}

export default Artists
