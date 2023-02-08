import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {removeItem,increase} from '../features/cart/cartSlice'
const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
    
  return (
      <article className='cart-item'>
          <img src={img } alt={title} />
          <div>
              <h4>{title}</h4>
              <h4>${price}</h4>
              
              <button className='remove-btn'
                  onClick={() =>{ dispatch(removeItem(id))}}>remove</button>
          </div>
          <div>
              <button className='amount-btn'
              onClick={()=>{dispatch(increase(id))}}>
                  <AiOutlineArrowUp/>
              </button>
              <p className='amount'>{amount}</p>
              <button className='amount-btn'
               onClick={()=>{dispatch(decrease(id))}}>
                  <AiOutlineArrowDown/>
              </button>
          </div>
      </article>
  )
}

export default CartItem