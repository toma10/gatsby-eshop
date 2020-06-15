import PropTypes from "prop-types"
import React from "react"

export default function IncrementDecrementField({
  value,
  onIncrement,
  onDecrement,
}) {
  function handleIncrement() {
    onIncrement()
  }

  return (
    <span className="inline-flex flex-col items-center ">
      <button
        type="button"
        className="p-0.5 text-gray-800 transition duration-150 ease-in-out bg-white hover:text-gray-600 focus:z-10 focus:outline-none focus:text-gray-600 active:text-gray-600"
        onClick={handleIncrement}
        aria-label="Increment"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <span className="font-semibold">{value}</span>
      <button
        type="button"
        className="p-0.5 text-gray-800 transition duration-150 ease-in-out bg-white hover:text-gray-600 focus:z-10 focus:outline-none focus:text-gray-600 active:text-gray-600"
        onClick={onDecrement}
        aria-label="Decrement"
        disabled={value === 1}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </span>
  )
}

IncrementDecrementField.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}
