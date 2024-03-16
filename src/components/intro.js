import React from 'react';
import { mobile } from '../components/constants.js';

function Intro() {
  // const mobile = window.innerWidth < 992;
  return (
    <p>
      I'm a <strong>front-end developer</strong> with an eye for detail and <br />
      a knack for building eye-catching user experiences.
      { !mobile &&
        <>
          <br />
          Keep scrolling to view some recent projects, or<br /> 
          visit my  <a href="https://github.com/justinziegler" rel="noreferrer" target="_blank">Github</a> for code examples.
        </>
      }
      { mobile && 
        <>
          <br />
          Come back on a larger screen to view some recent<br /> 
          projects, or visit my <a href="https://github.com/justinziegler" rel="noreferrer" target="_blank">Github</a> for code examples.
        </> 
      }
    </p>
  );
}

export default Intro;