import ItemCard from "../components/ItemCard"

export default function ItemsList({items, loading}) {
  return (
    <>
      <section className="flex flex-wrap justify-center p-9 bg-gray-100">
        {
          items.map(item => {
            return (
              <ItemCard key={item.id} item={item} loading={loading} />
            )
          })
        }
      </section>
    </>
  )
}
