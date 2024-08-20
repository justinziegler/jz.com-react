import React, { useState, useEffect } from "react";

function Compare(props) {
  const dragItem = document.querySelector("#handle");
  const container = document.querySelector(".compare");
  const photo = document.querySelector(".compare .photo");

  let active = false;
  let currentX;
  let initialX;
  let xOffset = (window.innerWidth / 2);

  const dragStart = (e) => {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
    } else {
      initialX = e.clientX - xOffset;
    }
    if (e.target === dragItem) {
      active = true;
    }
  }

  const dragEnd = (e) => {
    initialX = currentX;
    active = false;
  }

  const drag = (e) => {
    if (active) {
      e.preventDefault();
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
      } else {
        currentX = e.clientX - initialX;
      }
      xOffset = currentX;
      if (currentX < 1200) {
        setTranslate(currentX, dragItem, photo);
      }
    }
  }
  
  if (window.innerWidth >= 1200) {
    xOffset = 1200 / 2;
  }

  function setTranslate(xPos, el, mask) {
    var viewportWidth = window.innerWidth;
    var mediaWidth = 992;
    if (viewportWidth >= 992) {
      mediaWidth = 1200;
    }
    el.style.left = `calc(${xPos}px - 30px)`;
    mask.style.left = `${xPos}px`;
    var x = (mediaWidth / 2) - (viewportWidth / 2);
    mask.style.backgroundPosition = `right -${x}px top 50%`;
    
    let xPosPct = xPos / viewportWidth;
    if (viewportWidth > 1200) {
      xPosPct = xPos / mediaWidth;
    }
    
    const classicH2 = document.querySelector('.compare h2[data-type="UU"]');
    const tuftedH2 = document.querySelector('.compare h2[data-type="TU"]');
    if (xPosPct < .5) {
      classicH2.style.opacity = '0';
      tuftedH2.style.opacity = '1';
    } else {
      classicH2.style.opacity = '1';
      tuftedH2.style.opacity = '0';
    }
  }

  const [type, setType] = useState('UU')

  return (
    <section 
      className='compare lazyload' 
      data-type={ type } 
      data-color={ props.color }
      onTouchStart={ dragStart }
      onTouchEnd={ dragEnd }
      onTouchMove={ drag }
      onMouseDown={ dragStart }
      onMouseUp={ dragEnd }
      onMouseMove={ drag }
    >
      <div id='handle'></div>
      <h2 data-type='UU'>Timeless Classic</h2>
      <h2 data-type='TU'>Modern Minimalism</h2>
      <ul>
        <li data-type='UU' onClick={ () => setType('UU') }>Classic</li>
        <li data-type='TU' onClick={ () => setType('TU') }>Tufted</li>
      </ul>
      <div className='photo lazyload'></div>
    </section>
  )
}

export default Compare