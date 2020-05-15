import React from "react";
import Layout from "../components/UI/Layout/Layout";
import ConcertLink from "../components/ConcertLink/ConcertLink";
import styles from "../styles/pages.module.scss";
import {Link} from "gatsby";
import SponsorSlider from "../components/SponsorsSlider/SponsorsSlider";
import artysci from '../resources/artysci.jpg'
import koncertImg from '../resources/koncert.jpg'

const koncert = (props) => {
	if (props.location.search !== "") {
		const httpQuery = props.location.search.split('?')[1].split('=');
		const yearIndex = httpQuery.indexOf('rok') + 1;
		const year = httpQuery[yearIndex];
		return (
			<Layout>
				<ConcertLink to={`/koncert?rok=${year}`} name={"Informacje o koncercie"} image={koncertImg}/>
				<ConcertLink to={`/artysci?rok=${year}`} name={"Artyści koncertu"} image={artysci}/>
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
}

export default koncert;
