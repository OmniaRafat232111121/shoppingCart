import React from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
const CartItem = ({id,img,title,price,amount}) => {
  return (
      <article className='cart-item'>
          <img src={img } alt={title} />
          <div>
              <h4>{title}</h4>
              <h4>${price}</h4>
              
        <button className='remove-btn'>remove</button>
          </div>
          <div>
              <button className='amount-btn'>
                  <AiOutlineArrowUp/>
              </button>
              <p cl>{amount}</p>
          </div>
      </article>
  )
}

export default CartItem