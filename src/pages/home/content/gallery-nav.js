import React from 'react';
import { cats } from './constants.js';

function GalleryNav(props) {
  return (
    <div className="gallery-cat-nav">
      <ul data-current={ props.currentGroup }>
        { cats.map(cat => 
        <li key={ 'nav' + cat.class }>
            <a href="./" 
              className={ cat.class } 
              target={ cat.target }
              key={ cat.class } 
              onClick={ props.navigateGallery }
              onMouseEnter={ props.highlightGroup } 
              onMouseLeave={ props.clearHighlightGroup } >
              { cat.title }
              <span></span>
            </a>
        </li>)
        }
      </ul>
    </div>
  )
}

export default GalleryNav;