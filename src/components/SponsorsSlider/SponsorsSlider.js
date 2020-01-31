import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./SponsorsSlider.module.scss"

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
    const length = query.data.sponsorzies.length
    const logosJSX = query.data.sponsorzies.map((item, index) => {
        let position = index + i - 1
        console.log("position " + position + "length " + length)
        if (length - 1 <= position) {
            position = position - length
        }
        console.log(position)
        if (position < 7) {
            return (
              <a href={item.link} key={index} style={{ left: `${position * 14.3}%` }}>
                  <img src={item.logo.url} alt="logo sponsora"/>
              </a>)
        } else {
            return (
              <a href={item.link} key={index} style={{ display: "none", left: `${position * 14.3}%` }}>
                  <img src={item.logo.url} alt="logo sponsora"/>
              </a>)
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
      <div className={styles.SponsorSlider}>
          {logosJSX}
      </div>
    )
}


export default SponsorSlider