import React from "react"
import cn from "classnames"

const sizes = {
  sm: "text-sm",
  xs: "text-xs",
}

export default function PriceTag({ price, size = "sm" }) {
  return (
    <span className={cn("text-gray-700 leading-none", sizes[size])}>
      {price / 100} KČ
    </span>
  )
}
