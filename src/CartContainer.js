import React from 'react'
import CartItem from './CartItem'
import { GlobalContext } from './context'

const CartContainer = () => {
    const {cart, total, clearCart} = GlobalContext()
    console.log(total)

    if (cart.length === 0) {
        return <div>
            <p className='text-center'>Your Cart is Empty<br/> Add new items</p>
        </div>
    }
  return (
    <section className='cart px-[4.8rem] py-8'>
        <div>
            <h2 className='cart-header text-2xl text-center'>
                Your Cart
            </h2>
            <div className='cart-items'>
                {
                    cart.map((item) => (
                        <CartItem
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
            <div className='cart-totals'>
                <hr/>
                <div className='total flex justify-between'>
                    <h4>
                        Total
                    </h4>
                    <p className='price'>${total}</p>
                </div>
                <button onClick={clearCart}
                className='clear-button flex mx-auto border border-red-800 text-red-800 rounded-md px-2 hover:bg-red-800 hover:text-white hover:border-none'>
                    Clear Cart
                </button>
            </div>
        </div>
    </section>
  )
}

export default CartContainer