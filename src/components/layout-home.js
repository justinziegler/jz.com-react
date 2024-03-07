import React from 'react';

function LayoutHome(props) {
  return (
    <>
    <main>
      { (props.header && props.pageUrl !== '/') &&
        <>
          <div class="header-overlay"></div>
        </>
      }
    </main>
    </>
  );
}

export default LayoutHome;