const path = require("path")
const productTemplate = path.resolve("./src/templates/product-template.js")
const { stripeSkuToProduct } = require("./src/utils/index.js")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
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
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const products = result.data.allStripeSku.edges.map(({ node }) =>
    stripeSkuToProduct(node)
  )

  products.map(product => {
    createPage({
      path: `products/${product.id}`,
      component: productTemplate,
      context: {
        product,
      },
    })
  })
}
