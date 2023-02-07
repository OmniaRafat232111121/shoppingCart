import React from 'react'

const CartItem = ({id,img,title,}) => {
  return (
      <article className='cart-item'>
          <img src={img } />
          
      </article>
  )
}

export default CartItem