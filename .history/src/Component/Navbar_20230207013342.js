import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const {amount}=useSelector((state)=>state.cart)
  return (
      <>
          <nav>
              <div className='nav-center'>
                  <h3>Redux-ToolKit</h3>
                  
              </div>
          </nav>
      </>
  )
}

export default Navbar