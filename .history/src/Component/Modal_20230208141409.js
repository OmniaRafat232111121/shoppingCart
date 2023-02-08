import React from 'react'

const Modal = () => {
  return (
      <aside className='modal-container'>
          <div className='modal'>
              <h4>Remove all items from Your Shopping cart</h4>
              <div className='btn-container'>
                  <button type="button" className='btn-confirm'>
                      confirm
                  </button>
              </div>
          </div>
          
      </aside>
  )
}

export default Modal