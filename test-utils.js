import "@testing-library/jest-dom/extend-expect"

import { CartProvider } from "@src/context/cart-context"
import React from "react"
import { render } from "@testing-library/react"

const AllTheProviders = ({ children }) => {
  return <CartProvider>{children}</CartProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"

export { customRender as render }
