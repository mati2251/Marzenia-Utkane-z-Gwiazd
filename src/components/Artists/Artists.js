import React from "react"
import styles from "./Artisits.module.scss"
import { graphql, navigate } from "gatsby"
import { useStaticQuery } from "gatsby"
import Artist from "./Artist/Artisit"

const Artists = (props) => {

    const query = useStaticQuery(graphql`
        query{
            data {
                roks {
                    rok
                }
                artyscis {
                    rok {
                        rok
                    }
                    nazwa
                    opis
                    id
                    zdjecie {
                        url
                    }
                }
            }
        }
    `)

    const yearsJSX = query.data.roks.map((item) => {
          return (<option value={item.rok} key={item.rok}>{item.rok}</option>)
      },
    )

    let year = props.year;

    if(props.year === undefined){
        const years = []
        query.data.roks.forEach((item) => {
            years.push(item.rok)
        })
         year = Math.max(...years);
    }

    const artistJSX = query.data.artyscis.filter((item) => {
        console.log(item.rok.rok)
        return (item.rok.rok === year.toString())
    }).map((item) => {
        return (<Artist key={item.id} name={item.nazwa} description={item.opis} photo={item.zdjecie.url}/>)
    });


    return (
      <div className={styles.Artist__labelContainer}>
          <h2>
              Edycja Koncertu
              <select onClick={(value) => navigate(`artysci?rok=${value.target.value}`)}>
                  {yearsJSX}
              </select>
          </h2>
          {artistJSX}
      </div>
    )
}

export default Artists
