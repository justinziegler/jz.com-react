import React, { useState } from 'react';

function Ratings(props) {
  const p = props.page;
  const ratings = p.ratings[0];
  const ratingsStars = ratings.stars;
  console.log('ratings', ratings)
  console.log('ratingsStars', ratingsStars)
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
                <span> ({ ratings.total })
                  { ratings.tooltip &&
                    '*'
                  }
                </span>
              </p>
            </div>
            {/* // {% if p.comboPage and p.defaultCatId == 1 %}
            //   {% for c in p.comboProduct %}
            //     <div className="combo-tooltip-trigger-{{ c.comboProductType }} popup" 
            //       data-toggle-visibility="true" 
            //       data-product-id="{{ c.comboProductType }}" style="display: none;">
            //     </div>
            //   {% endfor %} 
            //     {%- if ratings.tooltip -%}
            //       {# Ratings tooltip on Mattress pages #}
            //       <div id="reviews-tooltip" style="display: none;">
            //         {%- if ratings.mattressTooltip -%}
            //           {{- reviewsTooltip(p) -}}
            //         {%- endif -%}
            //         {%- if ratings.tooltipFootnote !== '' -%}
            //           <p className="footnote">{{ ratings.tooltipFootnote }}</p>
            //         {%- endif -%}
            //       </div>
            //       {%- if p.comboPage -%}
            //         {%- for c in p.comboProduct -%}
            //           <div id="combo-tooltip-{{ c.comboProductType }}" style="display: none;">
            //             {{- reviewsTooltip(p) -}}
            //             <p className="footnote">*Reviews based on all Lull mattresses</p>
            //           </div>
            //         {%- endfor -%}
            //       {%- endif -%}
            //      {%- endif -%} */}
          </div>
        
      }
    </>
  )
}

export default Ratings