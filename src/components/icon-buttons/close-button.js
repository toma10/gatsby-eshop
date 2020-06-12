import IconButton from "./icon-button"
import React from "react"

export default function CloseButton({ onClick }) {
  return (
    <IconButton onClick={onClick} aria-label="Close">
      <svg
        className="w-8 h-8 text-indigo-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </IconButton>
  )
}
