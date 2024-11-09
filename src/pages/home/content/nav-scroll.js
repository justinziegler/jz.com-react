import React from 'react';
import { scrollTime } from './constants.js';

function navScroll() {
  return (
    <div className="col-two">
      <div className="row">
        <nav className="scroll-nav" data-active="true">
          <button onClick={ scrollTime }>
            <span>Recent Work</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default navScroll;