import CloseButton from "../icon-buttons/close-button"
import Link from "../link"
import React from "react"

export default function EmptyCart({ close }) {
  return (
    <div className="flex flex-col h-full space-y-8">
      <div className="flex-shrink-0 px-4">
        <div className="flex justify-end sm:justify-start">
          <CloseButton onClick={close} />
        </div>
        <div className="mt-6">
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-gray-900">Your Cart</h4>
            <span className="text-xs text-gray-500">is currently empty</span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="mt-40">
          <div className="space-y-8">
            <p className="text-sm text-center text-gray-600">
              Looks like there's nothing in your cart. <br />
              We can help with that.
            </p>
            <Link
              onClick={close}
              to="/#products"
              asButton
              variant="outlined"
              size="sm"
              fullWidth
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
