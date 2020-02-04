import React from "react"
import styles from "./Artisit.module.scss"
import {graphql, navigate} from "gatsby"
import {useStaticQuery} from "gatsby"

const Artist = (props) => {

	const query = useStaticQuery(graphql`
        query {
            data {
                roks {
                    artyscis {
                        nazwa
                        opis
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
		}
	);

	return (
		<div className={styles.Artist__labelContainer}>
			<h2>
				Edycja Koncertu
				<select onClick={(value) => navigate(`artysci?rok=${value.target.value}`)}>
					{yearsJSX}
				</select>
			</h2>
		</div>
	)
};

export default Artist
