import React from 'react'
import '../../../scss/01-holiday-mode/diy.scss'

function DIY(props) {
  const content = [
    {
      heading: 'Buy it Online',
      body: 'Get incredible value with Lull compared to traditional retail mattresses.  We cut out the middle man so you can save big!',
      icon: 'phone'
    },
    {
      heading: 'Arrives at Your Door',
      body: 'Your mattress ships in just 1-4 days with no-contact delivery. Innovative compression technology allows your Lull Mattress to easily ship in a box the size of a mini fridge.',
      icon: 'door'
    },
    {
      heading: 'Easy Setup',
      body: 'Open the box, place your compressed mattress on any bed frame, box spring, or flat surface. Unwrap, and watch the memory foam expand. Your new mattress is ready to sleep on right away.',
      icon: 'setup'
    },
    {
      heading: 'Enjoy Your Bed',
      body: 'Built for all sleepers, Lull\'s three layers of proprietary foam are designed to relieve pressure points and provide support in all the right places.',
      icon: 'snooze'
    },
  ]
  return (
    <div className='diy'>
      <div className='container'>
        <h2>The Super Easy DIY Mattress</h2>
        <div className='row'>
          {content.map((x, index) =>
            <div className='col-xs-12 col-md-10 col-md-offset-1' key={ `diy${index}`} >
              <div className={ `icon ${x.icon}` }></div>
              <h3>{ x.title }</h3>
              <p>{ x.body }</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DIY;