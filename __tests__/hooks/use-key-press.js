import { fireEvent, screen } from "test-utils"

import { renderHook } from "@testing-library/react-hooks"
import useKeyPress from "@src/hooks/use-key-press"

describe("useKeyPress", () => {
  it("calls callback", () => {
    const mockCallback = jest.fn()
    const { rerender } = renderHook(
      ({ targetKey, callback }) => useKeyPress(targetKey, callback),
      {
        initialProps: { targetKey: "Escape", callback: mockCallback },
      }
    )

    fireEvent.keyDown(screen.getByText(""), { key: "Escape" })
    expect(mockCallback).toHaveBeenCalledTimes(1)

    mockCallback.mockReset()
    rerender({ targetKey: "Enter", callback: mockCallback })

    fireEvent.keyDown(screen.getByText(""), { key: "Escape" })
    expect(mockCallback).toHaveBeenCalledTimes(0)
  })
})
