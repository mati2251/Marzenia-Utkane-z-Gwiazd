import React from 'react'
import Layout from "../components/UI/Layout/Layout"
import styles from "../styles/pages.module.scss"
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider"
import {graphql} from "gatsby";

const kontakt = (props) => {
	console.log(props);
	return (
		<Layout>
			<div className={styles.indexMain}>
				<h1>Kontakt</h1>
				<div className={styles.contact}>
					<div>
						<h2>E-Mail</h2>
						<h2>Numer Telefony</h2>
					</div>
					<div className={styles.contact__column}>
						<h2>{props.data.data.kontakts[0].mail}</h2>
						<h2>{props.data.data.kontakts[0].telefon}</h2>
					</div>
				</div>
				<SponsorSlider/>
			</div>
		</Layout>
	)
};

export const query = graphql`
    query {
        data{
            kontakts{
                mail
                telefon
            }
        }
    }
`;

export default kontakt;
