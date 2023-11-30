export default function Footer({items}) {

  let packedItems = (items.filter(item => item.packed == true)).length
  let numberOfItems = items.length
  return (
    <p className='stats'>
    {items.length === 0 ? (
      <i>Start adding some items to your packing list 🤖</i>
    ) : (
      <i>
        💼 You have {numberOfItems} items on your list, and you already packed {packedItems} (
        {((packedItems / numberOfItems) * 100).toFixed(0)}%)
      </i>
    )}
  </p>
  )
}
