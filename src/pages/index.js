import CartModal from "@src/components/cart-modal"
import Container from "@src/components/container"
import Footer from "@src/components/footer"
import Hero from "@src/components/hero"
import Navbar from "@src/components/navbar"
import ProductsList from "@src/components/products/products-list"
import React from "react"
import SEO from "@src/components/seo"
import { graphql } from "gatsby"
import { stripeSkuToProduct } from "@src/utils"

export const query = graphql`
  {
    allStripeSku(sort: { fields: product___name }) {
      edges {
        node {
          id
          price
          product {
            id
            name
          }
          localFiles {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default function IndexPage({ data }) {
  const products = data.allStripeSku.edges.map(({ node }) =>
    stripeSkuToProduct(node)
  )

  return (
    <div className="min-h-screen bg-indigo-50">
      <SEO title="Home" />
      <CartModal />
      <header>
        <Navbar />
      </header>
      <main>
        <section className="h-0 min-h-screen pt-28">
          <Container className="h-full">
            <Hero />
          </Container>
        </section>
        <section className="bg-white">
          <Container>
            <div id="products" className="py-40">
              <ProductsList products={products} />
            </div>
          </Container>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
