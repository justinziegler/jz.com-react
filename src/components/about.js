import React from 'react';
import Sticker from './sticker.js';
import Intro from './intro.js';
import NavScroll from './nav-scroll.js';
import { mobile } from './constants.js';

function About() {
  return (
    <section id="about">
      <div className="header-background">
        { !mobile && <span className="arrow"></span> }
        <span className="fade-out"></span>
      </div>
      <div className="container">
        <div className="content row">
          <div className="col-one">
            <Sticker />
            <Intro />
          </div>
          { !mobile && <NavScroll /> }
        </div>
      </div>
      <div className="about-footer">
        <div className="outline"></div>
        <div className="outline right"></div>
      </div>
    </section>
  );
}

export default About;