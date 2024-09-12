{% set additionalDetails = [
  {
    type: 'additional-details',
    heading: 'Additional Details',
    items: [
      {
        title: 'Size Guide',
        icon: false,
        className: 'size-guide-icons',
        bullets: false,
        content: 'This is pulled from the product details'
      },
      {
        title: 'Certifications',
        icon: false,
        className: 'certifications',
        bullets: true,
        content: [
           { item: '<div class="certipur logo" role="img" aria-label="Logo: Certipur"></div><p>The Lull ' + getProductName('PM') + ' is <br class="visible-lg">CertiPUR-US®-Certified, meaning materials<br class="visible-lg"> used are non-toxic and non-carcinogenic and <br class="visible-lg">meet the highest standards for safe content, emissions, and durability.</p>' },
          {	item: '<div class="sfc logo" role="img" aria-label="Logo: Sustainable Furnishings Council Member"></div><p>Environmental and health impacts of all products <br class="visible-lg">are analyzed and all possible steps are taken to minimize carbon emissions, waste stream pollutants, and un-recyclable content.</p>' }
        ]
      },
      {
        title: 'Product Dimensions',
        icon: false,
        className: 'product-dimensions',
        content: 'This is pulled from the product details'
      }
    ]
  }
]%}

{{ _m_modules.contentAccordion(additionalDetails, product, products) }}

{{ _m_modules.bedFrames() }}

{# Match content on shop-luxe. Convert that section into one that uses the module #}
{% set suggestedItems = [
  {
    title: 'More Lull Favorites',
    items: [
			{
				itemName: 'Mattress Protector',
				shortName: 'protector',
				linkName: 'protector',
				url: 'mattress-protector',
				description: 'Extend the life of your Lull Mattress<br class="visible-xxs"> and keep it safe from spills, stains <br class="visible-xxs">and allergens.'
			},
      {
        itemName: 'Gaviota  Bed Frame',
        shortName: 'wood-frame',
        linkName: 'frame',
        url: 'gaviota-platform-bed-frame',
        description: 'Lull\'s Gaviota frame offers modern design, easy assembly, and durable all-in-one support.'
      },
      {
        itemName: 'Lull Mattress Foundation',
        shortName: 'foundation',
        linkName: 'foundation',
        url: 'mattress-foundation',
        description: 'The box spring reimagined. Ultra sturdy support that\'s easy to assemble.'
      },
      {
        itemName: 'Original Lull Pillow',
        shortName: 'pillow',
        linkName: 'pillow',
        url: 'pillow',
        description: 'A three-layer design provides the perfect combination of comfort and support.'
      },
      {
        itemName: 'Arrellaga Bed Frame',
        shortName: 'metal-frame',
        linkName: 'arrellaga frame',
        url: 'arrellaga-metal-bed-frame',
        description: 'Lull\'s affordable Arrellaga frame provides durable support and generous under-bed storage.'
      },
      {
        itemName: 'Original Lull Duvet',
        shortName: 'duvet',
        linkName: 'duvet',
        url: 'duvet-insert',
        description: 'Millions of premium fibers keep you warm in the winter and cool in the summer.'
      },
      {
        itemName: 'Cotton Blend Sheets',
        shortName: 'cotton-sheets',
        linkName: 'sheets',
        url: 'cotton-blend-sheets',
        description: 'Silky, soft, and breathable &ndash; high quality sheets at an unbeatable price.'
      }
    ]
  }
]%}
{{ _m_modules.suggestedItems(suggestedItems) }}

{% set faq = [
  {
    question: 'How long does a memory foam mattress last?',
    answer: 'The Original Premium Lull Mattress has been subjected to rigorous independent testing ensuring years of comfortable and restful sleep. And with Lull\'s Lifetime Warranty, you\'re always covered. <a href="/warranty" target="_blank" role="button" tabindex="0">Learn more about our warranty</a>.'
  },
  {
    question: 'How does the ' + __('trialNights') + ' trial work for the mattress?',
    answer: 'After you place your Lull mattress order, it will ship for free right to your doorstep. Try it out stress-free for ' + __('trialNights') + 's. If you don\'t love it within the first ' + __('trialNights') + 's, arrange a quick and easy return. For more info on our return policy, <a href="/terms" target="_blank" role="button" tabindex="0">click here</a>.'
  },
  {
    question: 'Does the mattress sleep hot like other memory foam mattresses?',
    answer: 'Lull mattresses are designed to keep you cool all night long. The top layer of the mattress is made of gel-infused viscoelastic memory foam, which dramatically enhances airflow while drawing heat away from your body.'
  },
  {
    question: 'How do I get the mattress back in the box?',
    answer: 'You don\'t. We pick it up fully expanded. If you are not completely satisfied with your sleeping experience within the first ' + __('trialNights') + 's, we will arrange for a free pickup and removal of your Lull mattress in its expanded form. Lull makes every effort possible to donate returned trial mattresses to charities and organizations in need of beds.'
  },
  {
    question: 'How long before I receive my mattress?',
    answer: 'Lull mattresses typically ship in 1-4 business days following your order. Once your mattress has shipped, we will provide you with information to track your order.'
  }
]%}
{{- _m_modules.faq(faq) -}}

{{ _m_yotpo.yotpoRichText(state) }}
{{ _m_css.yotpo() }}
{{ _m_modals.video() }}
{% endblock %}

{% block scripts %}
  {{ _m_js.yotpo() }}
  {{ _m_modals.salesModal(mattressDiscount, state) }}
  {{ _m_modules.suggestedItemsScripts() }}
  {{ _m_modules.bedFramesScript() }}
  {{ _m_js.swipeIt() }}
  {{ _m_modules.reviewsCarouselScript() }}
  {{ _m_modules.lullWayCompactScripts() }}
  {{ _m_modules.slideShow() }}
  {{ _m_modules.originalPremiumScripts() }}
  {{ _m_modals.videoScript(videoSrc) }}
  <script>
    {% if state.optimizelyExperimentVariables['opm_anchor_experiment'].enabled and state.optimizelyExperimentVariables['opm_anchor_experiment'].pagevariant === 'variant1' %}
      $(window).on('load', function() {
        let target = $('#mattress-anchor');
        if (target.length) {
          $('html, body').animate({
            scrollTop: $(target).offset().top,
          }, 0);
        }
      });
    {% endif %}

    // Make sure we need this - may already be covered in sticky button
    ;(function($, win) {		
	    $.fn.inViewport = function(cb) {		
        return this.each(function(i,el){		
            function visPx(){		
                var H = $(this).height(),		
                r = el.getBoundingClientRect(), t=r.top, b=r.bottom;		
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  		
            } visPx();		
            $(win).on("resize scroll", visPx);		
        });		
	    };		
	  }(jQuery, window));

    var mobile = window.innerWidth < 768;
    if (!mobile) {
      $('.made-simple .stage > div').attr('role', 'button').attr('tabIndex', 0);
      $('.made-simple .stage > div[data-slide="4"] a').attr('role', 'button').attr('tabIndex', 0);
      $('.made-simple .dots button').attr('tabIndex', -1);
    }

    $('.made-simple .frame').inViewport(function(px) {
      if(px) $('.made-simple .frame').addClass('autoplay');
    });

    var valueProps = new SwipeIt('.made-simple .frame');
    var valuePropsNav = $('.made-simple .dots button');

    valueProps
    .on('swipeLeft',function() {
      $(this).removeClass('autoplay');
      nextSlide($(this));
    })
    .on('swipeRight',function(e){
      $(this).removeClass('autoplay');
      prevSlide($(this));
    });

    $(valuePropsNav).click(function(e) {
      $('.made-simple .frame').removeClass('autoplay');
      slideshowDots($(this));
    });

    $('.made-simple .stage div').on('keypress click', function(e) {
      if (e.which === 13 || e.type === 'click') {
        $(this).attr('data-active', true).siblings().attr('data-active', false);
        var slide = $(this).data('slide');
        var dot = $(this).closest('.frame').find('.dots button[data-slide="' + slide + '"]');
        slideshowDots(dot);
      }
    });
  </script>
{% endblock %}