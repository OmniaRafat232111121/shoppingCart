import React from 'react'

const CartItem = ({id,img,title,price,amount}) => {
  return (
      <article className='cart-item'>
          <img src={img } alt={title} />
          <div>
              <h4></h4>
          </div>
      </article>
  )
}

export default CartItem