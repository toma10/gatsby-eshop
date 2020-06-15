import QuantityField from "@src/components/quantity-field"
import React from "react"
import { render } from "test-utils"
import userEvent from "@testing-library/user-event"

describe("QuantityField", () => {
  it("can increment value", () => {
    const onChange = jest.fn()

    const { getByLabelText } = render(
      <QuantityField value={5} onChange={onChange} />
    )

    userEvent.click(getByLabelText(/increment/i))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(6)
  })

  it("can decrement value", () => {
    const onChange = jest.fn()

    const { getByLabelText } = render(
      <QuantityField value={5} onChange={onChange} />
    )

    userEvent.click(getByLabelText(/decrement/i))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(4)
  })

  it("cannot decrement below one", () => {
    const onChange = jest.fn()

    const { getByLabelText, rerender } = render(
      <QuantityField value={2} onChange={onChange} />
    )

    userEvent.click(getByLabelText(/decrement/i))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(1)

    onChange.mockReset()
    rerender(<QuantityField value={1} onChange={onChange} />)

    userEvent.click(getByLabelText(/decrement/i))
    expect(onChange).toHaveBeenCalledTimes(0)
  })
})
