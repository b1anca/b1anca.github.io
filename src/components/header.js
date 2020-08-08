import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          color: "black",
          padding: `0 1rem`,
        }}
      >
        home
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: `none`,
          color: "black",
          padding: `0 1rem`,
        }}
      >
        about
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
