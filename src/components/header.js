import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Link from "./link"

const Header = () => (
  <StyledHeader>
    <LinksContainer>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </LinksContainer>
  </StyledHeader>
)

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
`

const LinksContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: flex-end;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
