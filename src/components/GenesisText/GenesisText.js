import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import styles from "./GenesisText.module.scss"

const GenesisText = () => {
	const query = useStaticQuery(
		graphql`
            query {
                data {
                    genezas {
                        tekst
                        zdjecie {
                            url
                        }
                        id
                    }
                }
            }
		`
	)

	return (
		<>
			<div className={styles.GenesisText__photo}>
				<img
					src={query.data.genezas[0].zdjecie.url}
					alt={"genesis"}
				/>
			</div>
			<h2>{query.data.genezas[0].tekst}</h2>
			<div className={styles.GenesisText__photo}>
				<img
					src={query.data.genezas[1].zdjecie.url}
					alt={"genesis"}
				/>
			</div>
			<h2>{query.data.genezas[1].tekst}</h2>
		</>
	)
}

export default GenesisText
