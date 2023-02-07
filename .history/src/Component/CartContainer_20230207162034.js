import React from 'react'
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const {amount,total,cartItems}=useSelector((state)=>state.cart)
  return (
      <>
          
      </>
  )
}

export default CartContainer