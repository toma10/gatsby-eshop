import Brand from "./brand"
import CartButton from "./icon-buttons/cart-button"
import CloseButton from "./icon-buttons/close-button"
import Container from "./container"
import { Link } from "gatsby"
import MenuButton from "./icon-buttons/menu-button"
import Portal from "./portal"
import PropTypes from "prop-types"
import React from "react"
import Transition from "./transition"
import useBodyLock from "@src/hooks/use-body-lock"
import { useCart } from "@src/context/cart-context"

function NavLink(props) {
  return <Link {...props} className="text-2xl link sm:text-sm" />
}

function MobileNavModal({ isOpen, close }) {
  useBodyLock(isOpen)

  return (
    <Portal>
      <Transition show={isOpen}>
        <div className="fixed inset-0 z-50 sm:hidden">
          <Transition
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-x-4"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-4"
          >
            <div
              className="absolute inset-0 z-50 p-8 transition-all transform bg-indigo-50 sm:px-6 sm:left-auto sm:right-0 sm:w-96"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="space-y-6">
                <CloseButton onClick={close} />
                <nav className="flex flex-col items-start px-6 space-y-4">
                  <NavLink onClick={close} to="/">
                    Home
                  </NavLink>
                  <NavLink onClick={close} to="/#products">
                    Shop All
                  </NavLink>
                </nav>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Portal>
  )
}

MobileNavModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)

  function openMobileNav() {
    setIsMobileNavOpen(true)
  }

  function closeMobileNav() {
    setIsMobileNavOpen(false)
  }

  const { open: openCart } = useCart()

  return (
    <div className="fixed inset-x-0 z-50 h-28 bg-indigo-50">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full sm:hidden">
          <MobileNavModal isOpen={isMobileNavOpen} close={closeMobileNav} />
          <MenuButton onClick={openMobileNav} />
          <Brand />
          <CartButton onClick={openCart} />
        </div>
        <div className="hidden h-full sm:items-center sm:justify-between sm:flex">
          <div className="flex items-center space-x-12">
            <Brand />
            <nav className="flex items-center space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/#products">Shop All</NavLink>
            </nav>
          </div>
          <CartButton onClick={openCart} />
        </div>
      </Container>
    </div>
  )
}
