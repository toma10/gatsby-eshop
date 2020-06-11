import React from "react"
import cn from "classnames"

export default function Container({ children, className = null }) {
  return (
    <div
      className={cn(
        "px-8 mx-auto sm:px-10 md:px-12 lg:px-20 xl:px-24",
        className
      )}
    >
      {children}
    </div>
  )
}
