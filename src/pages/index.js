import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <h1>hi, I'm bianca vieira</h1>
    <p>full stack developer</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image path="girl-with-cat" />
    </div>
  </Layout>
)

export default IndexPage
