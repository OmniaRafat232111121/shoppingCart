import React from 'react'
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const { amount, total, cartItems } = useSelector((state) => state.cart);
    if(amount)
  return (
      <>
          
      </>
  )
}

export default CartContainer