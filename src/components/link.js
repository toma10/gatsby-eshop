import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"

const variants = {
  primary: "button-primary",
  outlined: "button-outlined",
}

const buttonSizes = {
  xs: "button-xs",
  sm: "button-sm",
}

const linkSizes = {
  xs: "text-xs",
  sm: "text-sm",
}

export default function Link({
  variant = "primary",
  size = "xs",
  fullWidth = false,
  asButton = false,
  uppercase = false,
  ...props
}) {
  let classes = cn(
    "link",
    linkSizes[size],
    uppercase && "uppercase tracking-wide"
  )

  if (asButton) {
    classes = cn(
      "button",
      variants[variant],
      buttonSizes[size],
      fullWidth && "w-full",
      uppercase && "uppercase tracking-wide"
    )
  }

  return <GatsbyLink {...props} className={classes} />
}

Link.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  asButton: PropTypes.bool,
  uppercase: PropTypes.bool,
}
