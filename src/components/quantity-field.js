import React from "react"

export default function QuantityField({ value, onChange }) {
  function handleIncrement() {
    onChange(value + 1)
  }

  function handleDecrement() {
    onChange(value - 1)
  }

  function handleChange(event) {
    const value = parseInt(event.target.value)

    if (!isNaN(value)) {
      onChange(value)
    }
  }

  return (
    <span className="inline-flex shadow-sm">
      <button
        type="button"
        className="px-2 py-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
        onClick={handleDecrement}
        aria-label="Decrement"
        disabled={value === 1}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 13H17V11H7V13Z"
          ></path>
        </svg>
      </button>
      <input
        type="number"
        className="w-full -ml-px text-center text-gray-500 rounded-none form-input focus:z-10"
        value={value}
        onChange={handleChange}
        step={1}
        min={1}
        aria-label="Quantity"
      ></input>
      <button
        type="button"
        className="px-2 py-2 -ml-px text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
        onClick={handleIncrement}
        aria-label="Increment"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </span>
  )
}
