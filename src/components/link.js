import React from "react"
import { Link } from "gatsby"

const CustomLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: `none`,
      color: "black",
      padding: `0 1rem`,
    }}
  >
    {children}
  </Link>
)

export default CustomLink
