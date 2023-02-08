import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'

const Modal = () => {
  return (
      <aside className='modal-container'>
          <div className='modal'>
              <h4>Remove all items from Your Shopping cart</h4>
              <div className='btn-container'>
                  <button type="button"
                      className=' btn btn-confirm'
                      onClick={() => {
                          dispatch(clearCart())
                          dispatch(closeModal())
                      }}>
                      confirm
                  </button>
                  <button type="button"
                      className=' btn btn-cancel'
                      onClick={() => {
                      
                  }}>
                     cancel
                  </button>
              </div>
          </div>
          
      </aside>
  )
}

export default Modal