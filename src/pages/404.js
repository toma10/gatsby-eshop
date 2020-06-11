import CartModal from "@src/components/cart-modal"
import Container from "@src/components/container"
import Link from "@src/components/link"
import Navbar from "@src/components/navbar"
import React from "react"
import SEO from "@src/components/seo"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-indigo-50">
      <SEO title="Home" />
      <CartModal />
      <header>
        <Navbar />
      </header>
      <main>
        <section className="h-0 min-h-screen bg-white py-28">
          <Container className="h-full">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-3xl">404</h2>
                <Link to="/" size="sm">
                  Go Home
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
