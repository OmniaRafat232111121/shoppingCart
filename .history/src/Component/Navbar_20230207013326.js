import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const {amount}=useSelector((state)=>state.cart)
  return (
      <>
          <nav>
              <div cl>
                  
              </div>
          </nav>
      </>
  )
}

export default Navbar