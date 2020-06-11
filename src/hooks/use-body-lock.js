import React from "react"

export default function useBodyLock(lock) {
  React.useEffect(() => {
    if (lock) {
      document.querySelector("body").classList.add("overflow-y-hidden")
    }

    return () => {
      document.querySelector("body").classList.remove("overflow-y-hidden")
    }
  }, [lock])
}
