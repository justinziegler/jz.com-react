import React from 'react'

function ScrollToAnchor(props) {
  React.useEffect(()=> {
    if (props.monthlyPayment > 0) {
      const element = document.getElementById('scroll-anchor');
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [props.monthlyPayment]);
  return (
    <div id='scroll-anchor'></div>
  )
}

export default ScrollToAnchor