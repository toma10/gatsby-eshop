import { CartProvider } from "./src/context/cart-context"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)
