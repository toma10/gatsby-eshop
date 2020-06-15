import { stripeCheckout, stripeSkuToProduct } from "@src/utils"

import { loadStripe as mockLoadStripe } from "@stripe/stripe-js"

jest.mock("@stripe/stripe-js")

describe("utils", () => {
  it("calls stripe checkout", async () => {
    const redirectToCheckoutMock = jest.fn()

    mockLoadStripe.mockResolvedValueOnce({
      redirectToCheckout: redirectToCheckoutMock,
    })

    await stripeCheckout([
      { sku: "sku_123", quantity: 3 },
      { sku: "sku_456", quantity: 1 },
      { sku: "sku_789", quantity: 2 },
    ])

    expect(mockLoadStripe).toHaveBeenCalledTimes(1)
    expect(mockLoadStripe).toHaveBeenCalledWith("pk_test_id")

    expect(redirectToCheckoutMock).toHaveBeenCalledTimes(1)
    expect(redirectToCheckoutMock).toHaveBeenCalledWith({
      items: [
        { sku: "sku_123", quantity: 3 },
        { sku: "sku_456", quantity: 1 },
        { sku: "sku_789", quantity: 2 },
      ],
      mode: "payment",
      billingAddressCollection: "required",
      successUrl: "shop.dev/success",
      cancelUrl: "shop.dev/cancel",
    })
  })

  it("converts stripe sku to product", () => {
    const stripeSku = {
      id: "sku_123",
      price: 499900,
      product: {
        id: "pro_123",
        name: "Product A",
      },
      localFiles: [
        {
          childImageSharp: {
            fluid: {
              aspectRatio: "aspectRatio",
              base64: "base64",
              sizes: "sizes",
              src: "src",
              srcSet: "srcSet",
              srcWebp: "srcWebp",
              srcSetWebp: "srcSetWebp",
            },
          },
        },
      ],
    }

    const product = stripeSkuToProduct(stripeSku)

    expect(product).toEqual({
      id: "pro_123",
      name: "Product A",
      price: 499900,
      sku: "sku_123",
      fluidImage: {
        aspectRatio: "aspectRatio",
        base64: "base64",
        sizes: "sizes",
        src: "src",
        srcSet: "srcSet",
        srcWebp: "srcWebp",
        srcSetWebp: "srcSetWebp",
      },
    })
  })
})
