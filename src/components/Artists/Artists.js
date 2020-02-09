import React from "react"
import styles from "./Artisits.module.scss"
import { graphql, navigate } from "gatsby"
import { useStaticQuery } from "gatsby"
import Artist from "./Artist/Artist"

const Artists = (props) => {

    const query = useStaticQuery(graphql`
        query {
            data {
                roks {
                    artyscis {
                        nazwa
                        opis
                        id
                        zdjecie {
                            url
                        }
                    }
                    rok
                }
            }
        }
    `)

    const yearsJSX = query.data.roks.map((item) => {
          return (<option value={item.rok} key={item.rok}>{item.rok}</option>)
      },
    )
    const prop = props.year.split("=")
    let year = prop[1]
    if (props.year === "") {
        year = Math.max(...query.data.roks.map((item) => {
            return item.rok
        })).toString()
    }
    const artistsJSX = query.data.roks.find((item) => item.rok === year).artyscis.map((item) => {
        return <Artist name={item.nazwa} key={item.id} description={item.opis} image={item.zdjecie.url}/>
    })

    return (
      <div className={styles.Artist__labelContainer}>
          <h2>
              Edycja Koncertu
              <select onClick={(value) => navigate(`artysci?rok=${value.target.value}`)}>
                  {yearsJSX}
              </select>
              <div className={styles.Artists__Container}>
                  {artistsJSX}
              </div>
          </h2>
      </div>
    )
}

export default Artists
