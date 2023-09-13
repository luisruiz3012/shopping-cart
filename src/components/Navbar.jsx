import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../redux/cartSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
  const itemsLength = items.length

  const isOpen = () => {
    dispatch(toggleCart())
  }

  return (
    <header className='shadow-md h-20 flex items-center px-10 fixed bg-white w-full z-20 justify-between'>
      <div className='flex items-center'>
        <p className='text-2xl font-bold mr-4'>Logo</p>
        <nav>
          <ul className='flex items-center gap-4'>
            <li className='text-gray-500'>Item 1</li>
            <li className='text-gray-500'>Item 2</li>
            <li className='text-gray-500'>Item 3</li>
          </ul>
        </nav>
      </div>

      <div className='fixed right-10 flex items-center gap-1 cursor-pointer' onClick={isOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <div className='text-sm'>{ itemsLength }</div>
      </div>
    </header>
  )
}
