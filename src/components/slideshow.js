const speed = .2;

function nextSlide(slideshow) {
  const current = Number(slideshow.dataset.current);
  if (isNaN(current))  current = 1;
  const stage = slideshow.querySelector('.stage');
  const slides = slideshow.querySelectorAll('.stage > div');
  const max = slides.length;
  let next = current + 1;
  if (current < max) {
    slideshow.setAttribute('data-current', next);
    slideshow.closest('section').setAttribute('data-current', next);
    stage.setAttribute('style', 'transition: ' + speed + 's ease-in-out;');
  } else { // at max
    next = 1;
    slideshow.setAttribute('data-current', 1);
    slideshow.closest('section').setAttribute('data-current', 1);
    const transition = ((max - 1) * speed);
    stage.setAttribute('style', `transition: ${transition}s ease-in-out;`);
  }
  setActive(slideshow, slides, next);
}

function prevSlide(slideshow) {
  const current = Number(slideshow.dataset.current);
  if (isNaN(current)) current = 1;
  const stage = slideshow.querySelector('.stage');
  const slides = slideshow.querySelectorAll('.stage > div');
  if (current > 1) {
    const next = (current - 1);
    slideshow.setAttribute('data-current', next);
    slideshow.closest('section').setAttribute('data-current', next);
    stage.setAttribute('style', `transition: ${speed}s ease-in-out;`);
    setActive(slideshow, slides, next);
  }
  return current;
}

function setActive(slideshow, slides, next) {
  slides.forEach(slide => { slide.setAttribute('data-active', false) });
  slideshow.querySelector(`.stage div[data-slide="${next}"]`).setAttribute('data-active', true);
  const dots = document.querySelectorAll('.dots button');
  if (dots.length) {
    dots.forEach(dot => { 
      dot.setAttribute('data-active', false);
      dot.blur();
    });
    document.querySelector(`.dots button[data-slide="${next}"]`).setAttribute('data-active', true);
  }
}

function slideshowDots(dot, dotsContainer) {
  const dots = dotsContainer.querySelectorAll('button');
  dots.forEach(dot => { 
    dot.setAttribute('data-active', false);
  });
  dot.setAttribute('data-active', true);
  const frame = dot.closest('.frame');
  const current = frame.dataset.current;
  const slide = Number(dot.dataset.slide);
  let transition = speed;
  if (current < slide) {
    transition = (speed * (slide - current));
  } else if (current > slide) {
    transition = (speed * (current - slide));
  }
  dot.closest('section').setAttribute('data-current', slide);
  frame.setAttribute('data-current', slide);
  frame.querySelector('.stage').setAttribute('style', `transition: ${transition}s ease-in-out`);
  const layers = frame.querySelectorAll('.stage > div');
  layers.forEach(layer => { layer.setAttribute('data-active', false) });
  frame.querySelector(`.stage div[data-slide="${slide}"]`).setAttribute('data-active', true);
}

export { nextSlide, prevSlide, setActive, slideshowDots };