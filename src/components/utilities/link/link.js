import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, target, ...props }) => {
  const link_test = /^\/(?!\/)/.test(to)

  const internal = (
    <GatsbyLink to={to} activeClassName={activeClassName} {...props}>
      {children}
    </GatsbyLink>
  )

  const external = (
    <a
      href={to}
      target={target ? target : null}
      rel={target === "_blank" ? "noreferrer" : ""}
      {...props}
    >
      {children}
    </a>
  )

  return link_test ? internal : external
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  target: PropTypes.string, // external links
  activeClassName: PropTypes.string, // internal links
}

Link.defaultProps = {
  target: "",
}

export default Link
