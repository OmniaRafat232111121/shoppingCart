import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
const CartItem = ({ id, img, title, price, amount }) => {
    
  return (
      <article className='cart-item'>
          <img src={img } alt={title} />
          <div>
              <h4>{title}</h4>
              <h4>${price}</h4>
              
        <button className='remove-btn' onClick={()=>dispatch(})}>remove</button>
          </div>
          <div>
              <button className='amount-btn'>
                  <AiOutlineArrowUp/>
              </button>
              <p className='amount'>{amount}</p>
               <button className='amount-btn'>
                  <AiOutlineArrowDown/>
              </button>
          </div>
      </article>
  )
}

export default CartItem