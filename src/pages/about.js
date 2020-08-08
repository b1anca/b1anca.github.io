import React from "react"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"

const About = () => {
  const xp = moment().diff(moment([2018, 6, 1]), "years")

  return (
    <Layout>
      <SEO title="about" />
      <h1>about me</h1>
      <p>
        I'm a full stack developer with {xp} years of experience with commercial
        projects
      </p>
      <p>some of my unfinished projects can be found at</p>
      <Link to="https://github.com/b1anca">github</Link>
      <Link to="https://gitlab.com/b1anca">gitlab</Link>
    </Layout>
  )
}

export default About
