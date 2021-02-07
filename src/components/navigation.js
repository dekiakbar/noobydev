import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link className="contact-link" to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)