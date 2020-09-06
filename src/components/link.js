import React from "react"
import { Link as GLink } from "gatsby"

const styles = {
  textDecoration: `none`,
  color: "white",
  padding: `0 1rem`,
}

const activeStyles = { backgroundColor: "white", color: "black" }

const Link = ({ to, children }) => (
  <GLink to={to} style={styles} activeStyle={activeStyles}>
    {children}
  </GLink>
)

export default Link
