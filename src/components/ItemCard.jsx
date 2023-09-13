import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useState } from "react";

export default function ItemCard({item, loading}) {

  const dispatch = useDispatch();
  const [onCart, setOnCart] = useState(false);

  const addItem = () => {
    if (onCart) {
      setOnCart(false);

      if (item.onCart == true) {
        dispatch(removeFromCart(item));
      }
    } else {
      setOnCart(true);

      item = {
        ...item,
        onCart,
        quantity: 1
      }

      dispatch(addToCart(item));
    }
  };

  return (
    loading ?
    <article className="md:w-1/3 lg:w-1/5 p-2 cursor-pointer bg-white">
        <div className="w-full rounded-t-md h-64 bg-gray-400 animate-pulse"></div>
        <section className="border h-34 px-4 py-2 rounded-b-md shadow-sm">
          <h2 className="bg-gray-400 animate-pulse h-3 rounded-full"></h2>
          <p className="bg-gray-400 w-3/4 animate-pulse h-3 rounded-full mt-2"></p>
          <div className="flex items-center justify-between mt-3">
            <p className="bg-gray-400 w-1/4 animate-pulse h-3 rounded-full mt-2"></p>
            <p className="bg-gray-400 w-1/4 animate-pulse h-3 rounded-full mt-2"></p>
          </div>
        </section>
      </article>
    
    :

      <article className="md:w-1/2 lg:w-1/5 p-2 transition-all ease-in duration-200 hover:-translate-y-2 hover:p-0 cursor-pointer">
      <img className="w-full rounded-t-md" src={`${item.images[0]}`} alt={`${item.title}`} />

      <section className="border h-44 px-4 bg-white py-2 rounded-b-md shadow-sm hover:shadow-lg">
        <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
        <p>{item.description.substring(0,40)}{ item.description.length > 40 ? '...' : '' }</p>
        <div className="flex items-center justify-between mt-3">
          <p className="font-bold font-3xl">${item.price}</p>
          <button
            className={`${!onCart ? 'border py-2 px-4 border-gray-400 rounded-md hover:bg-black hover:text-white transition-all ease-in duration-200' : 'border border-gray-200 py-2 px-4 rounded-md transition-all ease-in duration-200 bg-gray-300 text-gray-500'}`}
            onClick={() => loading == false && addItem()}
          >
            {
              onCart ? 'Added' : 'Add to cart'
            }
          </button>
        </div>
      </section>
    </article>
  )
}
