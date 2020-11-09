import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
//import { useStaticQuery, graphql } from "gatsby"

const github = "https://github.com/Newk7"
const linkedIn = "https://www.linkedin.com/in/kevin-newcomb/"

const AboutBlurb = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     sunset: file(relativePath: { eq: "sunset.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 600) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     index: file(relativePath: { eq: "index.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div className="about-blurb">
      <a id="about" />
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>About Me</h3>
            <p>
              My name is Kevin Newcomb. I am currently working as a Junior
              Software Engineer primarily focused on Full Stack Web Development.
              I love to solve problems and learn from others, learn new
              frameworks and technologies, and search for more opportunity to
              develop special skills and techniques.
            </p>
            <div className="btn-row">
              <a href={github}>
                <FontAwesomeIcon icon={faGithub} size="1x" /> View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="black-box overlay">
        <div className="links">
          <div className="github">
            <a href={github}>
              <FontAwesomeIcon icon={faGithubSquare} size="4x" color="black" />
            </a>
          </div>
          <div className="linkedin">
            <a href={linkedIn}>
              <FontAwesomeIcon icon={faLinkedin} size="4x" color="black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb
