import IncrementDecrementField from "@src/components/increment-decrement-field"
import React from "react"
import { render } from "test-utils"
import userEvent from "@testing-library/user-event"

describe("IncrementDecrementField", () => {
  it("can increment and decrement value", () => {
    const onIncrement = jest.fn()
    const onDecrement = jest.fn()

    const { getByLabelText } = render(
      <IncrementDecrementField
        value={5}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )
    userEvent.click(getByLabelText(/increment/i))
    expect(onIncrement).toHaveBeenCalledTimes(1)

    userEvent.click(getByLabelText(/decrement/i))
    expect(onDecrement).toHaveBeenCalledTimes(1)
  })

  it("cannot decrement below one", () => {
    const onIncrement = jest.fn()
    const onDecrement = jest.fn()

    const { getByLabelText, rerender } = render(
      <IncrementDecrementField
        value={2}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )

    userEvent.click(getByLabelText(/decrement/i))
    expect(onDecrement).toHaveBeenCalledTimes(1)

    onDecrement.mockReset()
    rerender(
      <IncrementDecrementField
        value={1}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )

    userEvent.click(getByLabelText(/decrement/i))
    expect(onDecrement).toHaveBeenCalledTimes(0)
  })
})
