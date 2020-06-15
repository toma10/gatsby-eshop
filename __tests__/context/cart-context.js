import { CartProvider, useCart } from "@src/context/cart-context"
import { act, renderHook } from "@testing-library/react-hooks"

const productA = {
  id: "pro_123",
  name: "Product A",
  price: 49900,
  sku: "sku_123",
  fluidImage: {},
}

const productB = {
  id: "pro_456",
  name: "Product B",
  price: 199900,
  sku: "sku_456",
  fluidImage: {},
}

describe("CartContext", () => {
  it("opens and closes cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    expect(result.current.isOpen).toEqual(false)

    act(() => {
      result.current.open()
    })

    expect(result.current.isOpen).toEqual(true)

    act(() => {
      result.current.close()
    })

    expect(result.current.isOpen).toEqual(false)
  })

  it("can add items to cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    expect(result.current.items.length).toEqual(1)
    expect(result.current.items).toEqual([
      {
        id: productA.id,
        quantity: 3,
        product: productA,
      },
    ])

    act(() => {
      result.current.addItem({
        id: productB.id,
        quantity: 2,
        product: productB,
      })
    })

    expect(result.current.items.length).toEqual(2)
    expect(result.current.items).toEqual([
      {
        id: productA.id,
        quantity: 3,
        product: productA,
      },
      {
        id: productB.id,
        quantity: 2,
        product: productB,
      },
    ])
  })

  it("updated quantity if item is already in cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    expect(result.current.items.length).toEqual(1)
    expect(result.current.items).toEqual([
      {
        id: productA.id,
        quantity: 3,
        product: productA,
      },
    ])

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 1,
        product: productA,
      })
    })

    expect(result.current.items.length).toEqual(1)
    expect(result.current.items).toEqual([
      {
        id: productA.id,
        quantity: 4,
        product: productA,
      },
    ])
  })

  it("removes item from cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    expect(result.current.items.length).toEqual(1)

    act(() => {
      result.current.removeItem({ id: productA.id })
    })

    expect(result.current.items.length).toEqual(0)
  })

  it("clears all items in cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    act(() => {
      result.current.addItem({
        id: productB.id,
        quantity: 2,
        product: productB,
      })
    })

    expect(result.current.items.length).toEqual(2)

    act(() => {
      result.current.clearItems()
    })

    expect(result.current.items.length).toEqual(0)
  })

  it("increments quantity of the item in cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    act(() => {
      result.current.incrementQuantity({ id: productA.id })
    })

    expect(result.current.items[0].quantity).toEqual(4)
  })

  it("decrements quantity of the item in cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    act(() => {
      result.current.decrementQuantity({ id: productA.id })
    })

    expect(result.current.items[0].quantity).toEqual(2)
  })

  it("calculates total price of cart", () => {
    const { result } = renderHook(useCart, { wrapper: CartProvider })

    expect(result.current.totalPrice).toEqual(0)

    act(() => {
      result.current.addItem({
        id: productA.id,
        quantity: 3,
        product: productA,
      })
    })

    expect(result.current.totalPrice).toEqual(149700)

    act(() => {
      result.current.addItem({
        id: productB.id,
        quantity: 2,
        product: productB,
      })
    })

    expect(result.current.totalPrice).toEqual(549500)
  })
})
