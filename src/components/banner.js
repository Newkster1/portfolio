import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      seattleDarkRed: file(relativePath: { eq: "seattleDarkRed.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      silverChair: file(relativePath: { eq: "silverChair.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      goldLaptop: file(relativePath: { eq: "goldLaptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.goldLaptop.childImageSharp.fluid} />
          </div>
          <div className="main-text">Kevin Newcomb</div>
          <div className="main-image">
            <Img fluid={data.seattleDarkRed.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.silverChair.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
      <div className="fixed-misc">Full Stack Web Developer</div>
    </div>
  )
}

export default Banner
