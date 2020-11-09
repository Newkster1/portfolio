import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ContactBlurb = () => {
  return (
    <div className="contact-blurb">
      <a id="contact" />
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Contact</h3>
            <p>
              <h6>Email:</h6>Kevin@Newkster.com
            </p>
            <p>
              <h6>LinkedIn:</h6>
              <a href="https://www.linkedin.com/in/kevin-newcomb/">
                Kevin Newcomb
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBlurb
