import React, { useEffect, useState } from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import styles from "./SlideShowPhoto.module.scss"

const Slider = () => {
  const data = useStaticQuery(
    graphql`
      query {
        data {
          indeksZdjecias {
            id
            zdjecieDoSlidera {
              url
            }
          }
        }
      }
    `
  )

  const images = data.data.indeksZdjecias.filter(item => {
    return item.zdjecieDoSlidera
  })

  let [number, setNumber] = useState(0)

  const imagesJSX = images.map((item, index) => {
    if (number === index) {
      return (
        <img
          src={item.zdjecieDoSlidera.url}
          key={item.zdjecieDoSlidera.url}
          alt="z pokazu zdjec"
          style={{ opacity: 1, zIndex: 0 }}
        />
      )
    } else {
      return (
        <img
          src={item.zdjecieDoSlidera.url}
          key={item.zdjecieDoSlidera.url}
          alt="z pokazu zdjec"
          style={{ opacity: 0.5, zIndex: -2 }}
        />
      )
    }
  })

  useEffect(() => {
    setTimeout(() => {
      nextPhoto()
    }, 3000)
  })

  const nextPhoto = () => {
    if (number + 1 === images.length) {
      setNumber(0)
    } else {
      setNumber(number + 1)
    }
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideShowPhoto}>
        <div className={styles.slideShowPhoto__photos}>
          <Link to="sponsorzy" style={{"cursor": "pointer"}}><h1>Charytatywny Koncert Wielkanocny</h1></Link>
          {imagesJSX}
        </div>
      </div>
      <div className={styles.slideShowPhotoBlack} />
    </div>
  )
}

export default Slider
