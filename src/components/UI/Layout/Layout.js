import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import style from './Layout.module.scss'

const Layout = (props) => (
  <>
      <Sidebar/>
      <Header/>
      <main className={style.layout__main}>
          {props.children}
      </main>
    <Footer/>
  </>
);

export default Layout;
