import React from 'react';
import { scrollTime } from './constants';

function NavFooter() {
  const navLinkData = [
    {
      title: 'Justin Ziegler',
      location: 'Santa Barbara, CA',
      link: '',
      target: '',
      class: 'title'
    },
    {
      title: 'Recent Work',
      link: '#',
      target: '#recently',
      class: 'recent',
    },
    {
      title: 'Github',
      link: 'https://github.com/justinziegler',
      target: '_blank',
      class: 'gh'
    },
    {
      title: 'Resume',
      link: require('../pdf/JustinZiegler-Resume2023.pdf'),
      target: '_blank',
      class: 'resume'
    },
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/jzieglersb',
      target: '_blank',
      class: 'li'
    },
    {
      title: 'Email',
      email: 'justin.ziegler@gmail.com',
      link: 'mailto:justin.ziegler@gmail.com',
      target: '',
      class: 'email'
    }
  ];
  const navLinks = navLinkData.map(x => 
    <li className={ x.class } key={ x.class }>
      { x.class === 'title' ? 
        <span>{ x.title } <span className="bullet">&bull;</span> { x.location }</span> : 
          x.target.slice(0, 1) !== '#' ?
            <a href={ x.link } className={ x.linkClass } target={ x.target } tabIndex="0">
              { x.title }
              { x.email != null && <span className="email">:&nbsp;{ x.email }</span> }
            </a>
          :
            <button className={ x.linkClass } target={ x.target } tabIndex="0" onClick={ scrollTime }>
             { x.title }
            </button>
      }
    </li>
  )
  return (
    <nav className="nav-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ul>
              { navLinks }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavFooter;