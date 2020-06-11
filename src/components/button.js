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

export default function Button({
  type = "button",
  variant = "primary",
  size = "xs",
  fullWidth = false,
  asLink = false,
  uppercase = false,
  ...props
}) {
  let classes = cn(
    "button",
    variants[variant],
    buttonSizes[size],
    fullWidth && "w-full",
    uppercase && "uppercase tracking-wide"
  )

  if (asLink) {
    classes = cn(
      "link",
      linkSizes[size],
      uppercase && "uppercase tracking-wide"
    )
  }

  return <button type={type} {...props} className={classes} />
}
