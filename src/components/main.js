import React, { useState } from 'react';
import Header from './header';

function Main(props) {
  const p = props.page;
  const { children } = props;

  // Page details
  const [open, setOpen] = useState(true);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  // Hamburger menu
  const [openHamburger, setOpenHamburger] = useState(false);
  const handleOpenHamburger = (e) => {
    e.preventDefault();
    setOpenHamburger(!openHamburger);
  }

  const resetHeader = (e) => {
    setOpen(false);
    setOpenHamburger(false);
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
      />
      <main onClick={ resetHeader }>
        { children }
        { p.header && p.pageUrl !== '/' &&
          <div className="header-overlay" data-visible={ open }></div>
        }
      </main>
    </>
  )
}

export default Main;