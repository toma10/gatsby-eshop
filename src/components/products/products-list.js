import Img from "gatsby-image"
import { Link } from "gatsby"
import PriceTag from "../price-tag"
import PropTypes from "prop-types"
import React from "react"

function Product({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="px-6 py-4 transition duration-200 border-2 border-transparent hover:border-indigo-50 hover:shadow-xs"
    >
      <Img fluid={product.fluidImage} alt={product.name} />
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h4 className="font-semibold">{product.name}</h4>
          <PriceTag price={product.price} />
        </div>
      </div>
    </Link>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default function ProductsList({ products }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-center">All Products</h3>
      <div className="grid gap-6 mt-12 md:col-gap-12 md:row-gap-16 md:grid-cols-2 xl:gap-24 xl:grid-cols-3">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
}
