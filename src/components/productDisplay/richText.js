
function RichText(props) {
  const p = props.page
  return (
    <div id='richtext' style={{ display: 'none' }}>
      { p.skus.map((item, index) =>
        <div itemScope itemType='http://schema.org/Product' key={ `itemprops${ index }`}>
          Brand: <span itemProp='brand'>Lull</span><br />
          Item: <span itemProp='name'>{ item.sizeName  }</span><br />
          <img itemProp='image' src={ p.productImage } alt={ item.description } className='lazyload' /><br />
          <span itemProp='description'>{ item.description }<br />
          Dimensions:{ item.dimensions }</span><br />
          SKU: <span itemProp='sku'>{ item.sku }</span><br />
          <span itemProp='offers' itemScope itemType='http://schema.org/Offer'>
            Price: <span itemProp='price' content={ item.salePrice }>{ item.salePrice }</span><br />
            Valid From: <span itemProp='validFrom' content='2020-01-01T00:00:00-0800'>Jan. 01, 2020</span><br />
            Valid To: <span itemProp='validThrough' content='2120-12-31T00:00:00-0800'>Dec. 31, 2120</span><br />
            <meta itemProp='priceCurrency' content='USD' />
            <link itemProp='availability' itemType='http://schema.org/InStock'/>
              { item.outOfStock ?
                <>OutOfStock</>      
              :
                <>InStock</>
              }
          </span> 
        </div>
      )}
    </div>
  )
}

export default RichText