import { render, within } from "test-utils"

import Portal from "@src/components/portal"
import React from "react"

describe("Portal", () => {
  it("shows portal children", () => {
    render(
      <>
        <div data-testid="foo" />
        <Portal>
          <div data-testid="test" />
        </Portal>
      </>
    )

    const { getByTestId } = within(document.getElementById("portal"))
    within(document.body).getByTestId("foo")
    expect(getByTestId("test")).toBeInTheDocument()
  })
})
