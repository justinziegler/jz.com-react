import React from 'react';

function Sticker() {
  return (
    <div className="sticker">
      <div className="row">
        <div className="top stripe col-xs-12">
          <h3>
            <span>Hello</span><br />
            My Name Is
          </h3>
        </div>
        <div className="middle stripe col-xs-12">
          <h1>Justin Ziegler</h1>
        </div>
        <div className="bottom stripe col-xs-12"></div>
      </div>
    </div>
  );
}

export default Sticker;