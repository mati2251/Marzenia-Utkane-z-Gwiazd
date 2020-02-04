import React from "react"
import styles from "./Artisit.module.scss"
import { graphql, navigate } from "gatsby"
import { useStaticQuery } from "gatsby"

const Artist = () => {

    const query = useStaticQuery(graphql`
        query myquery {
            data {
                roks {
                    rok
                }
            }
        }

    `)

    return (
      <div className={styles.Artist__labelContainer}>
          <h2>
              Edycja Koncertu
              <button onClick={ () => navigate("artysci?rok=2017")}>WW</button>
              <select onClick={(value) =>navigate(`artysci?rok=${value.target.value}`)}>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
              </select>
          </h2>
      </div>
    )
}

export default Artist