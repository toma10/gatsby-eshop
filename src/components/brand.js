import { Link } from "gatsby"
import React from "react"

function Logo() {
  return <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
}

export default function Brand() {
  return (
    <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
      <Logo />
      <h1 className="font-semibold">JoeyShop</h1>
    </Link>
  )
}
