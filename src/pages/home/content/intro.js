import React          from 'react'
import { scrollTime } from './constants.js'
import { githubUrl }  from '../../../data/navLinks.js'

function Intro() {
  const mobile = window.innerWidth < 992;
  return (
    <p>
      I'm a <strong>web developer</strong> that loves  building<br /> 
      eye-catching and engaging user experiences. 
      { !mobile &&
        <>
          <br />
          Scroll to find examples of my <a href="./" onClick={ scrollTime }>Recent Work </a>.<br /> 
          Most of the projects featured here can be <br /> explored in more depth on my <a href={ githubUrl } rel="noreferrer" target="_blank">Github</a>.<br />
          Thanks for visiting!
        </>
      }
      { mobile && 
        <>
          <br />
          Come back on a larger screen to view some recent<br /> 
          projects, or visit my <a href={ githubUrl } rel="noreferrer" target="_blank">Github</a> for code examples.
        </> 
      }
    </p>
  );
}

export default Intro;