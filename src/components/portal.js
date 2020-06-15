import PropTypes from "prop-types"
import React from "react"
import ReactDOM from "react-dom"

let portalRoot =
  typeof document !== "undefined" ? document.getElementById("portal") : null

if (!portalRoot && typeof document !== "undefined") {
  portalRoot = document.createElement("div")
  portalRoot.setAttribute("id", "portal")
  document.body.appendChild(portalRoot)
}

export default function Portal({ children }) {
  const el = React.useRef(
    typeof document !== "undefined" ? document.createElement("div") : null
  )

  React.useLayoutEffect(() => {
    if (!portalRoot) {
      return
    }

    const currentEl = el.current
    portalRoot.appendChild(currentEl)

    return () => portalRoot.removeChild(currentEl)
  }, [])

  if (el.current) {
    return ReactDOM.createPortal(children, el.current)
  } else {
    return null
  }
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
}
