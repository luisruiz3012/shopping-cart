import React from 'react'
import { useSelector } from 'react-redux'
import CartListItem from '../components/CartListItem';

export default function CartList() {

  const items = useSelector((state) => state.cart.items);
  const isOpen = useSelector((state) => state.cart.isOpen);
  
  const total = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity
    })
    return total.toFixed(2);
  }

  return (
    <section className={isOpen ? 'w-1/4 bg-white fixed right-0 py-4 px-6 z-10 h-[calc(100vh-80px)] overflow-auto ease-in transition-all duration-300 -translate-x-0' : 'w-1/4 bg-white fixed right-0 py-10 px-8 z-10 h-[calc(100vh-80px)] overflow-auto ease-in transition-all duration-300 translate-x-full' }>
      <p className='text-2xl font-bold mb-6'>My order</p>
      <div className='flex flex-col gap-4 max-h-96 overflow-y-auto'>
        {
          items.map((item) => {
            return (
              <CartListItem key={item.id} item={item} />
            )
          })
        }
      </div>
      <p className='text-xl font-semibold my-4'>Total: ${ total() }</p>
      <button className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full'>Continue to checkout</button>
    </section>
  )
}
