import { renderHook } from "@testing-library/react-hooks"
import { screen } from "test-utils"
import useBodyLock from "@src/hooks/use-body-lock"

describe("useBodyLock", () => {
  it("locks body", () => {
    const { rerender } = renderHook(({ lock }) => useBodyLock(lock), {
      initialProps: { lock: false },
    })

    expect(screen.getByText("")).not.toHaveClass("overflow-y-hidden")

    rerender({ lock: true })

    expect(screen.getByText("")).toHaveClass("overflow-y-hidden")
  })
})
