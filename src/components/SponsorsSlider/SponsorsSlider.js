import React, { useEffect, useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./SponsorsSlider.module.scss"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const SponsorSlider = () => {
    const query = useStaticQuery(
      graphql`
          query myquery {
              data {
                  sponsorzies {
                      link,
                      logo {
                          url
                      }
                  }
              }
          }
      `)

    const [i, setI] = useState(0)

    const logosJSX = query.data.sponsorzies.map((item, index) => {
        let position = 0
        if (query.data.sponsorzies.length * 80 - 80 * 2 < index * 80 + i) {
            position = index * 80 + i - (query.data.sponsorzies.length * 80)
        } else {
            position = index * 80 + i;
        }
        if (position === -80) {
            return (
              <a href={item.link} key={index} style={{ left: `${position}px` }}>
                  <img src={item.logo.url} alt="logo sponsora"/>
              </a>)
        } else {
            return (
              <a href={item.link} key={index} style={{ left: `${position}px`, transition: "all 0.5s ease" }}>
                  <img src={item.logo.url} alt="logo sponsora"/>
              </a>)
        }
    })

    setTimeout(() => {
        // if (!window.hidden) {
            if (i + 80 > query.data.sponsorzies.length * 80) {
                setI(0)
            } else {
                setI(i + 80)
            }
        // }
    }, 4000)

    return (
      <div className={styles.SponsorSlider}>
          <div className={styles.SponsorSlider__label}>
              <h2>Sponsorzy i Partnerzy:</h2>
              <div className={styles.SponsorSlider__socialMedia}>
                  <a href="https://www.facebook.com/marzeniautkanezgwiazd/" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className={styles.SponsorSlider__socialMediaLogo}/>
                  </a>
                  <a href="https://www.instagram.com/marzeniautkanezgwiazd/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className={styles.SponsorSlider__socialMediaLogo}/>
                  </a>
                  <a href="https://www.youtube.com/channel/UC4GqrrJdK-Dfg15coY3RslA" target="_blank"
                     rel="noopener noreferrer">
                      <FaYoutube className={styles.SponsorSlider__socialMediaLogo}/>
                  </a>
              </div>
          </div>
          <div className={styles.SponsorSliderXHide}>
              {logosJSX}
          </div>
      </div>
    )
}

export default SponsorSlider