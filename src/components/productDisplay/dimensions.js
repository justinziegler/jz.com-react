function Dimensions(props) {
  const p = props.p
  return (
    p.skus.map((item, index) =>
      <span
        data-sku={ item.sku }
        data-visible={ item.sku === props.sku }
        key={ `d-${ index }` }
      >
      { item.w } x { item.l } 
      { item.h !== undefined && 
        <>
          x { item.h }
        </>
      }
      </span>
    )
  )
}

export default Dimensions