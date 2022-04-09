import React from 'react'
import { BsCart } from 'react-icons/bs';
import { GlobalContext } from './context';

const NavBar = () => {
    const {amount} = GlobalContext()
  return (
    <nav className='nav bg-[#6e8fba] text-white px-5 '>
        <div className='nav-center h-[3.5rem] flex justify-between items-center'>
            <h3>UseReducer</h3>
            <div className='nav-right relative'>
                <BsCart className='total-cart-icon text-2xl'/>
                <div className='nav-qty-container'>
                    <p className='total-cart-items absolute bottom-3 left-3 bg-[#1b252f] h-5 w-5 px-[5px] pb-[1.5rem] pt-0 rounded-[100%]'>
                        {amount}
                    </p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar