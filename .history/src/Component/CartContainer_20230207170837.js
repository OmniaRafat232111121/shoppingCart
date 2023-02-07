import React from 'react'
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const { amount, total, cartItems } = useSelector((state) => state.cart);
    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is Currently empty</h4>
                </header>
                
            </section>
        )
    }
  return (
      <>
          <header>
              <h2>Your bag</h2>
          </header>
          <div>
              {cartItems.map((item) => {
                  
              })}
          </div>
      </>
  )
}

export default CartContainer