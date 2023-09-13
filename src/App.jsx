import { useEffect, useState } from "react"
import ItemsList from "./containers/ItemsList"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "./redux/itemsSlice"
import Navbar from "./components/Navbar"
import CartList from "./containers/CartList"

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {
      dispatch(setItems(data))
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="py-20">
        <CartList />
        <ItemsList items={items} loading={loading} />
      </div>
    </>
  )
}

export default App
