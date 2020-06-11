import Button from "../button"
import CloseButton from "../icon-buttons/close-button"
import Img from "gatsby-image"
import IncrementDecrementField from "../increment-decrement-field"
import Link from "../link"
import PriceTag from "../price-tag"
import React from "react"
import { stripeCheckout } from "@src/utils"

function CartItem({ item, removeItem, incrementQuantity, decrementQuantity }) {
  function handleRemoveItem() {
    removeItem({ id: item.id })
  }

  function handleIncrement() {
    incrementQuantity({ id: item.id })
  }

  function handleDecrement() {
    decrementQuantity({ id: item.id })
  }

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-24">
          <Img fluid={item.product.fluidImage} alt={item.product.name} />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold leading-4">{item.product.name}</h3>
            <PriceTag price={item.product.price} size="xs" />
          </div>
          <div className="mt-2">
            <Button asLink onClick={handleRemoveItem}>
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <IncrementDecrementField
          value={item.quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  )
}

function CartItemsList({
  items,
  removeItem,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="divide-y divide-gray-100">
      {items.map(item => (
        <div key={item.id} className="py-4">
          <CartItem
            item={item}
            removeItem={removeItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        </div>
      ))}
    </div>
  )
}

export default function Cart({
  close,
  items,
  removeItem,
  clearItems,
  incrementQuantity,
  decrementQuantity,
  totalPrice,
}) {
  async function handleCheckout() {
    const stripeItems = items.map(item => ({
      sku: item.product.sku,
      quantity: item.quantity,
    }))

    const { error } = await stripeCheckout(stripeItems)

    if (error) {
      alert(error.message)
    }
  }

  return (
    <div className="flex flex-col h-full space-y-8">
      <div className="flex-shrink-0 px-4">
        <div className="flex justify-end sm:justify-start">
          <CloseButton onClick={close} />
        </div>
        <div className="mt-6">
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-gray-900">Your Cart</h4>
            <span className="text-xs text-gray-500">
              {`contains ${items.length} ${
                items.length === 1 ? "item" : "items"
              }`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 overflow-y-auto">
        <CartItemsList
          items={items}
          removeItem={removeItem}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      <div className="flex-shrink-0 px-4">
        <div className="space-y-3 text-center">
          <div className="flex justify-between py-4 border-t border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-600">Total</span>
            <span className="text-sm text-gray-800">{totalPrice / 100} KČ</span>
          </div>
          <Button asLink onClick={clearItems}>
            Clear All
          </Button>
          <Button size="sm" fullWidth onClick={handleCheckout}>
            Checkout
          </Button>
          <div>
            <Link onClick={close} to="/#products">
              Shop All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
