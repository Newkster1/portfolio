import React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import WorkBlurb from "../components/workBlurb"
import ContactBlurb from "../components/contactBlurb"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <WorkBlurb />
    <ContactBlurb />
  </div>
)

export default IndexPage
