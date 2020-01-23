import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"

const Layout = (props) => (
  <>
    <Sidebar/>
    <Header/>
    {props.children}
    <Footer/>
  </>
)

export default Layout;