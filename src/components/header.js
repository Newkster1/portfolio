import { Link } from "gatsby"
import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = () => (
  <header>
    <div className="container">
      <a id="home" />
      <div className="inner-header">
        <div className="logo">
          <Link to="/#home">Kevin</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/#about">About</Link>
            <Link to="/#work">Work</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
