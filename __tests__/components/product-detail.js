import { render, within } from "test-utils"

import CartModal from "@src/components/cart-modal/cart-modal"
import ProductDetail from "@src/components/products/product-detail"
import React from "react"
import userEvent from "@testing-library/user-event"

jest.mock("gatsby-image", () => () => {
  return <img alt="image-mock" />
})

const product = {
  id: "pro_123",
  name: "Product A",
  price: 49900,
  sku: "sku_123",
  fluidImage: {},
}

describe("ProductDetail", () => {
  it("adds product to cart", () => {
    let { queryByText, getByText, getByTestId } = render(
      <>
        <ProductDetail product={product} />
        <CartModal />
      </>
    )

    expect(queryByText(/your cart/i)).toBeNull()

    userEvent.click(getByText(/add to cart/i))
    expect(queryByText(/your cart/i)).toBeInTheDocument()

    const { queryByText: queryByTextWithinCartModal } = within(
      getByTestId("cart-modal")
    )
    expect(queryByTextWithinCartModal(/empty/i)).toBeNull()
  })
})
