import CartItem from "./cartItem"

function CartItems(props) {
  const Items = Array.from({ length : props.cart.length }).map((_, index) => (
    <CartItem key={index} item={ props.cart[index] } itemType={ props.itemType } />
  ))
  return (
    <>
      { Items }
    </>
    
  )
}

export default CartItems