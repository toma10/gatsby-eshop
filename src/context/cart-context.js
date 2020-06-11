import React from "react"

const CartContext = React.createContext()

const initialState = { isOpen: false, items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isOpen: true,
      }
    case "CLOSE":
      return {
        ...state,
        isOpen: false,
      }
    case "ADD_ITEM": {
      const item = state.items.find(item => item.id === action.payload.id)

      if (item) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              }
            }

            return item
          }),
        }
      }

      return {
        ...state,
        isOpen: true,
        items: [...state.items, action.payload],
      }
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      }
    case "CLEAR_ITEMS":
      return {
        ...state,
        items: [],
      }
    case "INCREMENT_QUANTITY": {
      const item = state.items.find(item => item.id === action.payload.id)

      if (item) {
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              }
            }

            return item
          }),
        }
      }

      return state
    }
    case "DECREMENT_QUANTITY":
      const item = state.items.find(item => item.id === action.payload.id)

      if (item) {
        return {
          ...state,
          items: state.items.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            }

            return item
          }),
        }
      }

      return state
    default:
      throw new Error("Invalid cart action type")
  }
}

function CartProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const open = React.useCallback(() => dispatch({ type: "OPEN" }), [dispatch])
  const close = React.useCallback(() => dispatch({ type: "CLOSE" }), [dispatch])

  const addItem = React.useCallback(
    payload => dispatch({ type: "ADD_ITEM", payload }),
    [dispatch]
  )

  const removeItem = React.useCallback(
    payload => dispatch({ type: "REMOVE_ITEM", payload }),
    [dispatch]
  )

  const clearItems = React.useCallback(
    () => dispatch({ type: "CLEAR_ITEMS" }),
    [dispatch]
  )

  const incrementQuantity = React.useCallback(
    payload => dispatch({ type: "INCREMENT_QUANTITY", payload }),
    [dispatch]
  )
  const decrementQuantity = React.useCallback(
    payload => dispatch({ type: "DECREMENT_QUANTITY", payload }),
    [dispatch]
  )

  const totalPrice = React.useMemo(
    () =>
      state.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      ),
    [state]
  )

  const value = React.useMemo(
    () => ({
      ...state,
      open,
      close,
      addItem,
      removeItem,
      clearItems,
      incrementQuantity,
      decrementQuantity,
      totalPrice,
    }),
    [
      state,
      open,
      close,
      addItem,
      removeItem,
      clearItems,
      incrementQuantity,
      decrementQuantity,
      totalPrice,
    ]
  )

  return <CartContext.Provider value={value} {...props} />
}

function useCart() {
  const context = React.useContext(CartContext)

  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`)
  }

  return context
}
export { CartProvider, useCart }
