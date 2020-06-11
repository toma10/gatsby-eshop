import React from "react"
import cn from "classnames"

export default function IconButton({ onClick, className = null, ...props }) {
  return (
    <button
      {...props}
      type="button"
      onClick={onClick}
      className={cn(
        "p-2 transition duration-200 ease-in-out rounded-full focus:outline-none focus:bg-indigo-100 active:bg-indigo-100",
        className
      )}
    />
  )
}
