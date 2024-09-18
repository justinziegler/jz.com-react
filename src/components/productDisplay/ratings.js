import React from 'react';

function Ratings(props) {
  const p = props.page
  const ratings = p.ratings[0]
  const ratingsStars = ratings.stars
  const ratingsPercentage = (ratings.average * 20) + '%'

  return (
    <>
      { ratingsStars &&
        <div className="star-ratings">
          <div className="star-rating">
            <div className="reviews-star-gauge">
              <div className="reviews-star-average" style={{ width: ratingsPercentage }}>
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