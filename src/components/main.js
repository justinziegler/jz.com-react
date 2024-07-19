import React, { useState } from 'react';
import Header from './header';

function Main(props) {
  const p = props.page;
  const { children } = props;

  const [open, setOpen] = useState(true);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  }
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
      />
      <main onClick={ resetHeader }>
        { children }
        { p.header && p.pageUrl !== '/' &&
          <div className="header-overlay"></div>
        }
      </main>
    </>
  )
}

export default Main;