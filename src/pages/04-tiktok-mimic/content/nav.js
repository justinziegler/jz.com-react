import React, { useState }  from 'react';

function Nav(props) {
  const nav = [
    { 
      title: <>
              <span className='mute'>Mute</span>
              <span className='unmute'>Unmute</span>
             </>,
      className: 'mute-btn'
    },
    { 
      title: 'Reviews',
      focus: 'reviews-carousel',
      className: 'nav-btn'
    },
    { 
      title: 'FAQs',
      focus: 'faqs',
      className: 'nav-btn'
    },
    { 
      title: 'Save Now',
      focus: 'email',
      className: 'nav-btn'
    },
    { 
      title: 'Lull',
      focus: 'cta',
      className: 'nav-btn'
    },
  ]

  const [muted, setMuted] = useState(true)
  function handleClick(e) {
    if (e.which === 13 || e.type === 'click') {
      e.preventDefault()
      props.setNavActive(true)
      const target = e.target.dataset.focus
      if (target !== undefined) {
        props.setActiveNavItem(target)
      } else { 
        setMuted(!muted)
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          video.muted = !muted;
        });
      }
    }
  }

  return (
    <>
      <div className='nav-overlay' onClick={ props.closeSection }></div>
      <div className='nav'>
        <ul>
          { nav.map((item, index) => 
            <li 
              className={ item.focus === 'email' ? 'email-btn' : undefined }
              key={ `navItem-${ index }` }
            >
              <a href='./' 
                className={ item.className } 
                data-muted={ item.className === 'mute-btn' ? muted : undefined }
                data-focus={ item.focus !== undefined ? item.focus : undefined }
                role='button' 
                tabIndex='0'
                onClick={ handleClick }
              >
                { item.title }
              </a>
            </li>
          )}
        </ul>
        <a href='/shop' className='btn btn-md' role='button' tabIndex='-1'>
          Shop the Mattress
        </a>
      </div>
    </>
  )
}

export default Nav