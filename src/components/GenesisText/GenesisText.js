import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from './GenesisText.module.scss'

const GenesisText = () => {
    const query = useStaticQuery(
      graphql`
          query {
              data {
                  genezas {
                      tekst
                      zdjecie {
                          url
                      }
                      id
                  }
              }
          }`);

    return (<>
            <img src={query.data.genezas[0].zdjecie.url} className={styles.GenesisText__photo} alt={"genesis"}/>
            <h2>{query.data.genezas[0].tekst}</h2>
            <img src={query.data.genezas[1].zdjecie.url} alt={"genesis"} className={styles.GenesisText__photo}/>
            <h2>{query.data.genezas[1].tekst}</h2>
    </>)
};

export default GenesisText
