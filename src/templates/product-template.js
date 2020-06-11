import CartModal from "@src/components/cart-modal"
import Container from "@src/components/container"
import Navbar from "@src/components/navbar"
import ProductDetail from "@src/components/products/product-detail"
import React from "react"
import SEO from "@src/components/seo"

export default function ({ pageContext: { product } }) {
  return (
    <div className="min-h-screen bg-indigo-50">
      <SEO title="Home" />
      <CartModal />
      <header>
        <Navbar />
      </header>
      <main>
        <section className="h-0 min-h-screen bg-white pt-28">
          <Container className="min-h-full py-16">
            <ProductDetail product={product} />
          </Container>
        </section>
      </main>
    </div>
  )
}
