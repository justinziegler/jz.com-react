import React, { useState } from 'react';

function Ratings(props) {
  const p = props.page;
  const ratings = p.ratings[0];
  const ratingsStars = ratings.stars;
  return (
    <>
      { ratingsStars &&
        <div className="star-ratings">
          <div className="star-rating {% if ratings.tooltip %}popup{% endif %}">
            <div className="reviews-star-gauge">
              <div className="reviews-star-average" style={{ width: ratings.average * 20 }}>
              </div>
            </div>
            <p>{ ratings.average }
              <span> ({ ratings.total })</span>
            </p>
          </div>
        </div>
      }
    </>
  )
}

export default Ratings