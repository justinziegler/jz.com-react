
function Total(props) {
  let total = 0
  props.cart.forEach(item => {
    total += item.salePrice
  })
  return (
    <>
      { total }
    </>
  )
}

export default Total