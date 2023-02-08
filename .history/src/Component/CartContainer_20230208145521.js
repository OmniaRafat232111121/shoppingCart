import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { clearCart }  from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';
const CartContainer = () => {
    const { amount, total, cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
   
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
          <div className="cart-Item">
              {cartItems.map((item) => {
                  return (
                      <CartItem key={item.id } {...item} />
                  )
              })}
          </div>
          <footer>
              <hr />
              <div className='cart-total'>
                  <h3>Total</h3>
                  <h4>${ total.toFixed(2)}</h4>
              </div>
              <button className='btn clear-btn'
                  onClick={()=>{dispatch(openModal())}}
              >clear cart</button>
          </footer>
     </div>
  )
}

export default CartContainer