const { loadStripe } = require("@stripe/stripe-js")

async function stripeCheckout(items) {
  const stripe = await loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

  return stripe.redirectToCheckout({
    items,
    mode: "payment",
    billingAddressCollection: "required",
    successUrl: `${process.env.GATSBY_URL}/success`,
    cancelUrl: `${process.env.GATSBY_URL}/cancel`,
  })
}

function stripeSkuToProduct(stripeSku) {
  const { product, localFiles } = stripeSku

  return {
    id: product.id,
    name: product.name,
    price: stripeSku.price,
    sku: stripeSku.id,
    fluidImage: localFiles[0].childImageSharp.fluid,
  }
}

exports.stripeCheckout = stripeCheckout
exports.stripeSkuToProduct = stripeSkuToProduct
