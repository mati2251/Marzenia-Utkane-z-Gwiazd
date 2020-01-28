import React from "react"
import Layout from "../components/UI/Layout/Layout"
import SlideShowPhoto from "../components/SlideShowPhoto/SlideShowPhoto"
import { Link } from "gatsby"
import style from "../styles/index.module.scss"

const IndexPage = () => (
  <>
      <Layout>
          <div className={style.indexMain}>
              <SlideShowPhoto/>
              <h4>
                  Tekst opisujący koncert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non auctor
                  nunc,
                  non dignissim nunc. Aenean vitae erat et est malesuada placerat. Quisque at porta lectus, sed faucibus
                  velit. Nunc risus diam, dapibus sed dolor sed, molestie maximus massa. Donec odio risus, euismod in
                  vehicula quis, congue quis ligula. Donec eu rutrum nisl, at elementum nibh. Quisque tincidunt faucibus
                  mauris sit amet mollis. Aliquam sollicitudin mi vel diam lacinia aliquet. <br/>
                  <Link to="geneza"> Chcesz wiedzieć więcej o koncercie zajrzyj na zakładke </Link>
              </h4>
          </div>
      </Layout>
  </>
)

export default IndexPage
