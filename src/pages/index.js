import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <h1>hi, I'm Bianca Vieira</h1>
    <p>a Software Developer</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image path="girl-with-cat" />
    </div>
  </Layout>
)

export default IndexPage
