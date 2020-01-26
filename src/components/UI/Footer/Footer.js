import React from "react"
import whiteLogo from "../../../resources/logoWhite.png"
import styles from "./Footer.module.scss"
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import {graphql, useStaticQuery} from "gatsby";

const Footer = () => {

	const data = useStaticQuery(
		graphql`
            query {
                data {
                    sponsorzies {
                        id
                        link
                        nazwa
                    }
                }
            }`);

	const sponsors = data.data.sponsorzies;
	const firstColumn = [];
	const secondColumn = [];
	let howManyPerColumn = sponsors.length;
	if( howManyPerColumn > 12) {
		howManyPerColumn = Math.round(sponsors.length / 2);
	}
	sponsors.forEach((item, index) => {
		if( index < howManyPerColumn){
			firstColumn.push(<a href={item.link} className={styles.footer__mainElementDark} key={item.id}><h4>{item.nazwa}</h4></a>)
		}
		else{
			secondColumn.push(<a href={item.link} className={styles.footer__mainElementDark} key={item.id}><h4>{item.nazwa}</h4></a>)
		}
	});

	const sponsorsJsx = (
		<div className={styles.footer__mainSponsorsRowDirection}>
			<div className={styles.footer__mainSponsorsColumn}>{firstColumn}</div>
			{secondColumn !== undefined ? <div className={styles.footer__mainSponsorsColumn}>{secondColumn}</div>: null}
		</div>);

	return (
		<footer className={styles.footer}>
			<section className={styles.footer__title}>
				<img src={whiteLogo} className={styles.footer__titleLogo} alt="białe logo"/>
				<h3>Marzenia Utkane z Gwiazd</h3>
				{console.log(data)}
			</section>
			<section className={styles.footer__main}>
				<div className={styles.footer__mainColumn}>
					<h4>Sponsorzy i Partnerzy: </h4>
					{sponsorsJsx}
				</div>
				<div className={styles.footer__mainColumn}>
					<h4>Kontakt:</h4>
					<div className={styles.footer__mainColumnContact}>
						<div>
							<h4 className={`${styles.footer__mainElementDark} ${styles.footer__mainContactElement}`}>Mail:</h4>
							<h4 className={`${styles.footer__mainElementDark} ${styles.footer__mainContactElement}`}>Numer
								Telefonu:</h4>
						</div>
						<div>
							<h4 className={styles.footer__mainElementDark}>mail@example.com</h4>
							<h4 className={styles.footer__mainElementDark}>+48 666 666 666</h4>
						</div>
					</div>
				</div>
				<div className={styles.footer__mainColumn}>
					<h4>Social Media:</h4>
					<a href="https://www.facebook.com/marzeniautkanezgwiazd/" target="_blank" rel="noopener noreferrer"
					   className={styles.footer__mainElementDark}>
						<FaFacebook className={styles.footer__mainSocialIcon}/> <h4> Facebook </h4></a>
					<a href="https://www.instagram.com/marzeniautkanezgwiazd/" target="_blank" rel="noopener noreferrer"
					   className={styles.footer__mainElementDark}>
						<FaInstagram className={styles.footer__mainSocialIcon}/> <h4> Instagram </h4></a>
					<a href="https://www.youtube.com/channel/UC4GqrrJdK-Dfg15coY3RslA" target="_blank"
					   rel="noopener noreferrer" className={styles.footer__mainElementDark}>
						<FaYoutube className={styles.footer__mainSocialIcon}/> <h4> YouTube </h4></a>
				</div>
			</section>
			<section className={styles.footer__allRightReserved}>
				<h4>© Wszelkie Prawa Zastrzeżona</h4>
			</section>
		</footer>
	);
};

export default Footer
