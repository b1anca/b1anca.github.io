import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import COLORS from "../constants/colors"
import "../../static/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>
        <main>{children}</main>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  font-family: "jetbrains-mono";
  background-color: ${COLORS.DARK_GREY};
  color: white;
  min-height: 100vh;
`

const ContentContainer = styled.div`
  margin: auto;
  max-width: 960px;
  padding: 10px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
