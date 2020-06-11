import React from "react"

export default function useKeyPress(targetKey, callback) {
  React.useEffect(() => {
    function handle({ key }) {
      if (key === targetKey) {
        callback()
      }
    }

    window.addEventListener("keydown", handle)
    return () => {
      window.removeEventListener("keydown", handle)
    }
  }, [targetKey, callback])
}
