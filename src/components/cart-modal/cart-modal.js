import Cart from "./cart"
import EmptyCart from "./empty-cart"
import Portal from "../portal"
import React from "react"
import Transition from "../transition"
import useBodyLock from "@src/hooks/use-body-lock"
import { useCart } from "@src/context/cart-context"
import useKeyPress from "@src/hooks/use-key-press"

export default function CartModal() {
  const {
    isOpen,
    items,
    close,
    removeItem,
    clearItems,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
  } = useCart()

  useBodyLock(isOpen)

  const escHandler = React.useCallback(() => {
    if (isOpen) {
      close()
    }
  }, [isOpen, close])

  useKeyPress("Escape", escHandler)

  return (
    <Portal>
      <Transition show={isOpen}>
        <div className="fixed inset-0 z-50">
          <Transition
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */}
            <span
              className="fixed inset-0 transition-opacity cursor-pointer"
              onClick={close}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </span>
          </Transition>
          <Transition
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-4"
          >
            <div
              className="absolute inset-0 px-4 py-8 transition-all transform bg-white sm:left-auto sm:right-0 sm:w-112"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {items.length === 0 ? (
                <EmptyCart close={close} />
              ) : (
                <Cart
                  items={items}
                  close={close}
                  removeItem={removeItem}
                  clearItems={clearItems}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  totalPrice={totalPrice}
                />
              )}
            </div>
          </Transition>
        </div>
      </Transition>
    </Portal>
  )
}
