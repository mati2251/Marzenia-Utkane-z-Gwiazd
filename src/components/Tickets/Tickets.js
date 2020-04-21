import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import SponsorSlider from "../SponsorsSlider/SponsorsSlider"
import styles from "./Tickets.module.scss"
import img from "../../resources/bilety.jpg";

const Tickets = () => {
	const query = useStaticQuery(
		graphql`
            query {
                data {
                    bileties {
                        tekst
                        link
                    }
                }
            }
		`
	)

	return (
		<>
			<h2 className={`${styles.headerStyle} ${styles.Tickets__label}`}>
				Bilety
			</h2>
			<div className={styles.Tickets__imageBlack}>
				<img src={img} className={styles.Tickets__image} alt="Widownia na koncercie"/>
			</div>
			<div className={styles.Tickets__container}>
				<h2 className={styles.Tickets__label}>
					{query.data.bileties[0].tekst}
					{query.data.bileties[0].link !== null ? (
						<a target="_blank"
						   rel="noopener noreferrer"
						   href={query.data.bileties[0].link}>
							Kliknij link aby dowiedzieć się wiecej
						</a>
					) : null}
				</h2>
			</div>
			<SponsorSlider/>
		</>
	)
}

export default Tickets
