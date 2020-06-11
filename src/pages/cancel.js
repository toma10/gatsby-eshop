import Link from "@src/components/link"
import React from "react"
import SEO from "@src/components/seo"

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 space-y-4 text-center bg-indigo-50">
      <SEO title="Cancel" />
      <h2 className="text-3xl font-semibold">Your order was cancelled</h2>
      <Link to="/" size="sm">
        Go Home
      </Link>
    </div>
  )
}
