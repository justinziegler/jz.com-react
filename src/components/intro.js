import React from 'react';

function Intro() {
  const mobile = window.innerWidth < 992;
  return (
    <p>
      I'm a <strong>front-end developer</strong> with an eye for detail and <br />
      a knack for building eye-catching user experiences.
      { mobile && 
        <span>
          <br />
          Come back on a tablet (or larger) screen to<br /> 
          check out some of my recent projects.
        </span> 
      }
    </p>
  );
}

export default Intro;