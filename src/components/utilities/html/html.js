import React from "react"
import PropTypes from "prop-types"

const HTML = ({ content, className }) => (
  <>
    {content && content.childMarkdownRemark && (
      <div
        dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        className={className}
      />
    )}
  </>
)

HTML.propTypes = {
  content: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string,
}

export default HTML
