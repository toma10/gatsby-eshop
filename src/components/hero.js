import Link from "@src/components/link"
import React from "react"

export default function Hero() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="max-w-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum
          similique, nam ad dignissimos totam qui illo porro ea iure.
        </p>
      </div>
      <div className="flex items-center justify-center flex-shrink-0 h-28">
        <Link to="/#products" size="sm" uppercase>
          Shop All Products
        </Link>
      </div>
    </div>
  )
}
