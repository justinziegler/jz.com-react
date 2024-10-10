import React from 'react'

function ScrollToAnchor(props) {
  React.useEffect(()=> {
    if (props.monthlyPayment > 0 && !props.scrolled) {
      const element = document.getElementById('scroll-anchor');
      element.scrollIntoView({ behavior: 'smooth' })
      props.setScrolled(true)
    }
  }, [props]);
  return (
    <div id='scroll-anchor'></div>
  )
}

export default ScrollToAnchor