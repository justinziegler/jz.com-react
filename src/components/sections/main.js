import React, { useState } from 'react'
import Header              from './header'

function Main(props) {
  const p = props.page
  const { children } = props

  // Page details
  const [open, setOpen] = useState(true)
  const [showOverlay, setShowOverlay] = useState(true)
  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(!open)
    setShowOverlay(false)
  }

  // Hamburger menu
  const [openHamburger, setOpenHamburger] = useState(false)
  const handleOpenHamburger = (e) => {
    e.preventDefault()
    setOpenHamburger(!openHamburger)
  }

  const resetHeader = (e) => {
    setOpen(false)
    setOpenHamburger(false)
    setShowOverlay(false)
  }
  return (
    <>
      <Header 
        page={ props.page } 
        open={ open } 
        handleOpen={ handleOpen }
        handleOpenHamburger={ handleOpenHamburger }
        openHamburger={ openHamburger }
        holidayMode={ props.holidayMode } 
        setHolidayMode={ props.setHolidayMode }
        activeDisplay={ props.activeDisplay }
        setActiveDisplay={ props.setActiveDisplay }
      />
      <main onClick={ resetHeader } 
        data-active-slide={ props.activeIndex } 
        data-active={ props.navActive }
        style={{ 'backgroundColor': p.backgroundColor !== undefined ? p.backgroundColor : null }}
      >
        { children }
        { p.url !== '/' &&
          <div className="header-overlay" data-visible={ showOverlay }></div>
        }
      </main>
    </>
  )
}

export default Main