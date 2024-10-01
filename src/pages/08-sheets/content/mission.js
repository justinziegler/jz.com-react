import '../../../scss/08-sheets/photo-module.scss'
import '../../../scss/08-sheets/mission.scss'

function Mission(props) {
  const content = [
    {
      content: 'Lull Sheets are sustainably produced using 99% recycled water and 70% renewable energy. The planet will love these sheets as much as you will.'
    },
    {
      content: 'Lull\'s premium sheets come from a family-owned workshop that has been crafting high-quality textiles since 1945.'
    },
    {
      content: 'With an emphasis on giving back, the purchase of your new Lull Sheets helps fund education, housing, and women\'s empowerment efforts.'
    },
    {
      content: 'Every stitch in the Lull Sheets collection is crafted with care, love, and to the highest standards.'
    }
  ]
  return (
    <section className='mission photo-module photo-left'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='photo-frame col-xs-12 col-md-6'>
            <div className='photo lazyload' role='img' aria-label='Image: Cotton field'></div>
          </div>
          <div className='content col-xs-12 col-md-6'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2>Crafted With a Mission</h2>
                { content.map((item, index) =>
                  <p key={ `item-${ index }`}>{ item.content }</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission