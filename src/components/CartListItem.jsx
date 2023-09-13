import { useState } from "react";
import { removeFromCart, updateCartItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function CartListItem({ item }) {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  const updateQuantity = (e) => {
    setQuantity(e.target.value);
    item = { ...item, quantity: parseInt(e.target.value) };
    console.log(item)
    dispatch(updateCartItem(item));
  }

  const removeItem = () => {
    dispatch(removeFromCart(item));
  }

  return (
    <article className="flex justify-between border-b pb-3">
      <div className="flex items-center">
        <img className="w-14 rounded-md h-14" src={item.images[0]} alt={item.title} />
        <div className="ml-4">
          <p>{ item.title }</p>
          <p className="text-gray-700">${ item.price * quantity } x { quantity }</p>
          <div className="flex items-center ">
            <p className="text-gray-500 mr-3">Quantity: </p>
            <input type="number" className="border border-gray-500 rounded-sm w-14 text-center" value={quantity} onChange={updateQuantity}  min="1" />
          </div>
        </div>
      </div>
      <svg onClick={removeItem} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2 text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

    </article>
  )
}
