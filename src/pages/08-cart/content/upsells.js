
import Upsell from "./upsell"

function Upsells(props) {
  const Items = Array.from({ length : props.upsells.length }).map((_, index) => (
    <Upsell key={index} u={ props.upsells[index] } />
  ))
  return (
    <>
      { Items }
    </>
    
  )
}

export default Upsells