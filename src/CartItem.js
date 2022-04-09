import React from 'react'
import { BsTrash, } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { GlobalContext } from './context';


const CartItem = ({id, title, price, img, quantity,}) => {
    const {removeItem, increase, decrease} = GlobalContext()
  return (
    <article className='article w-[21rem] mx-auto my-8'>
        <div className='inner-container border border-gray-300 rounded-lg grid grid-cols-3 p-6 h-[10rem] bg-[#fff]'>
            <img src={img} className='w-[5rem] h-auto my-auto object-cover rounded'/>
            <div className='col2 flex flex-col items-start'>
                <p className='title font-bold'>
                    {title}
                </p>
                <p className='rating text-orange-500 font-semibold'>
                    4.9
                </p>
                <p className='price font-bold'>
                    ${price}
                </p>
            </div>
            <div className='col3 flex flex-col justify-between items-end'>
                <div className='quantity flex gap-2 items-center'>
                    <span onClick={() => decrease(id)} className='cursor-pointer'>
                        <FiMinus/>
                    </span>
                    <p>{quantity}</p>
                    <span onClick={() => increase(id)} className='cursor-pointer'>
                        <FiPlus />
                    </span>
                </div>
                <div onClick={() => removeItem(id)}
                className='remove-item text-red-400 cursor-pointer'>
                    <BsTrash/>
                </div>
            </div>
        </div>
    </article>
  )
}

export default CartItem