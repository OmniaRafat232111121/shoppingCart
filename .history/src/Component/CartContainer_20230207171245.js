import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

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
      <div className='cart'>
          <header >
              <h2>Your bag</h2>
          </header>
          <div className='cart'>
              {cartItems.map((item) => {
                  return (
                      <CartItem key={item.id } {...item} />
                  )
              })}
          </div>
          <footer>
              <hr />
              <div className='cart-total'>
                  <h4>${ total}</h4>
              </div>
          </footer>
      </>
  )
}

export default CartContainer