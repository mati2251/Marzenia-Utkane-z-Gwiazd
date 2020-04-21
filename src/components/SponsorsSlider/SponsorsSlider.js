import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./SponsorsSlider.module.scss"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const SponsorSlider = props => {
  const query = useStaticQuery(
    graphql`
      query {
        data {
          sponsorzies {
            link
            logo {
              url
            }
          }
        }
      }
    `
  )

  const [i, setI] = useState(0)
  const length = query.data.sponsorzies.length
  const logosJSX = query.data.sponsorzies.map((item, index) => {
    let position = index + i - 1
    if (length - 1 <= position) {
      position = position - length
    }
    if (position < 7) {
      return (
        <a target="_blank"
           rel="noopener noreferrer"
           href={item.link} key={index} style={{ left: `${position * 14.3}%` }}>
          <img src={item.logo.url} alt="logo sponsora" />
        </a>
      )
    } else {
      return (
        <a
          href={item.link}
          key={index}
          style={{ display: "none", left: `${position * 14.3}%` }}
        >
          <img src={item.logo.url} alt="logo sponsora" />
        </a>
      )
    }
  })

  setTimeout(() => {
    if (i === length - 1) {
      setI(0)
    } else {
      setI(i + 1)
    }
  }, 3000)

  return (
    <>
      <div className={`${styles.SponsorSlider__label} ${[props.className]}`}>
        <h2>Sponsorzy i Partnerzy:</h2>
        <div className={styles.SponsorSlider__socialMedia}>
          <a
            href="https://www.facebook.com/marzeniautkanezgwiazd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.SponsorSlider__socialMediaLogo} />
          </a>
          <a
            href="https://www.instagram.com/marzeniautkanezgwiazd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.SponsorSlider__socialMediaLogo} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4GqrrJdK-Dfg15coY3RslA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.SponsorSlider__socialMediaLogo} />
          </a>
        </div>
      </div>
      <div className={styles.SponsorSlider}>{logosJSX}</div>
    </>
  )
}

export default SponsorSlider
