import Button from "../button"
import Img from "gatsby-image"
import PriceTag from "../price-tag"
import QuantityField from "../quantity-field"
import React from "react"
import { useCart } from "@src/context/cart-context"

export default function ProductDetail({ product }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = React.useState(1)

  function handleAddItem() {
    addItem({ id: product.id, quantity: quantity, product })
  }

  return (
    <div className="grid items-center gap-6 lg:gap-12 lg:grid-cols-2">
      <Img fluid={product.fluidImage} alt={product.name} />
      <div className="space-y-6 justify-self-center lg:justify-self-start">
        <div>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <PriceTag price={product.price} />
        </div>
        <div className="max-w-xl space-y-2 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            exercitationem eveniet possimus quae modi voluptatibus sint nihil
            nemo officia totam unde earum aspernatur vel, impedit numquam iste
            omnis illum inventore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            exercitationem eveniet possimus quae modi voluptatibus sint nihil
            nemo officia totam unde earum aspernatur vel, impedit numquam iste
            omnis illum inventore!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <QuantityField value={quantity} onChange={setQuantity} />
          <Button
            className="justify-center w-full tracking-wide uppercase"
            onClick={handleAddItem}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
