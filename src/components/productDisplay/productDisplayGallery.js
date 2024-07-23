function ProductDisplayGallery(props) {
  const p = props.page;
  return (
    <div className='product-gallery col-xs-12 col-sm-6 gallery-left'
      data-color={ p.defaultColor || 'none' }
      data-type={ p.defaultProductType }
      data-upsell-selected='false'>
      <div className='swiper-container carousel'>
        <div className='swiper-wrapper'>
          {/* {% for i in range(1, (p.gallerySlides + 1)) %}
            <div className='swiper-slide slide-{{ i }} {% if i !== 1 %}lazyload{% endif %} {% if i == p.galleryDimensions %}dimensions{% endif %} ' role='img' aria-label='Image: {{ p.heading | safe }} image {{ i }}'>

              {%- if i == p.galleryDimensions -%}
                {% for item in p.skus %}
                  {%- for product in p.dimensions -%}
                    {% if product.size == item.size %}
                      <span data-sku='{{ item.sku }}' style='display: none;'>
                        <span className='length' data-length='{{ product.l }}'></span>
                        <span className='width' data-width='{{ product.w }}'></span>
                        <span className='height' data-height='{{ product.h }}'></span>
                        {% if product.totalHeight !== '' %}
                          <span className='total-height' data-totalheight='{{ product.totalHeight }}'></span>
                        {% endif %}
                      </span>
                    {% endif %}
                  {% endfor %}
                {% endfor %}
              {% endif %}

              {% if p.galleryVideo %}
                {% if i == p.galleryVideoSlide %}
                  {% if p.galleryVideoSource == 'vimeo' %}
                    <iframe src='{{ p.galleryVideoUrl }}&autoplay=true&title=false&portrait=false&playsinline=true&byline=false' className='lazyload' width='100%' height='100%' frameborder='0' title='{{ p.heading | safe }} video' webkitallowfullscreen mozallowfullscreen allowfullscreen autoplay></iframe>
                  {% else %}
                    {% for video in p.galleryVideoUrl %}
                      <video id='galleryVideo{{ loop.index }}' poster='{{ p.galleryVideoPoster }}' className='lazyload' role='img' aria-label='Image: {{ p.heading | safe }} video' autoplay playsinline loop muted>
                        <source src='{{ video }}' type='video/mp4'>
                      </video>
                    {% endfor %}
                  {% endif %}

                {% endif %}
              {% endif %}
            </div>
          {% endfor %} */}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  )
  
} 

export default ProductDisplayGallery;