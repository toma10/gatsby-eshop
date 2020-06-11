import Brand from "./brand"
import Container from "./container"
import React from "react"

function Copyright() {
  return <div className="text-xs text-gray-600">© 2020 JoeyShop</div>
}

export default function Footer() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-6 space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
        <Brand />
        <Copyright />
      </div>
    </Container>
  )
}
