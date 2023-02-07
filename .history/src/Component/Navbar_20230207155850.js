import React from 'react'
import { useSelector } from 'react-redux';
import {BsCart} from 'react-icons/bs'
const Navbar = () => {
    const {data}=useSelector((state)=>state.cart.amount)
  return (
      <>
          <nav>
              <div className='nav-center'>
                  <h3>Redux-ToolKit</h3>
                  <div className='nav-container'>
                      <BsCart size={30}  />
                      <div className='amount-container'>
                          <p className='total-amount'>data.amount</p>
          </div>
                  </div>
                  
              </div>
          </nav>
      </>
  )
}

export default Navbar