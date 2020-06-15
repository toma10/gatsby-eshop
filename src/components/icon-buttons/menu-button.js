import IconButton from "./icon-button"
import PropTypes from "prop-types"
import React from "react"

export default function MenuButton({ onClick }) {
  return (
    <IconButton onClick={onClick} aria-label="Menu">
      <svg
        className="w-6 h-6 text-gray-800"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </IconButton>
  )
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
