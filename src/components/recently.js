import React, { useState } from 'react';
import { galleryContent } from './gallery-content.js';
import 'lazysizes';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import 'swiper/scss/controller';
import 'swiper/scss/free-mode';
import 'swiper/scss/effect-fade';
import GalleryNav from './gallery-nav.js';
import GalleryInfo from './gallery-info.js';
import Gallery from './gallery.js';
import Thumbnails from './thumbs.js';
import GalleryModal from './gallery-modal.js';

let modal = {
  image: galleryContent[0].images[0],
  mobile: false,
  size: 'xl',
  title: galleryContent[0].title
}

function Recently () {
  const [gallerySwiper, setGallerySwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);
  const [currentGroup, setCurrentGroup] = useState('recently')
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {     
    modal.image = e.target.src;
    modal.mobile = e.target.dataset.mobile === 'true';
    modal.mobile ? modal.size = 'md' : modal.size = 'xl';
    modal.title = e.target.alt;
    setShow(true);
  }
  
  function navigateGallery(event) {
    event.preventDefault();
    const slideTarget = Number(event.target.target);
    if (slideTarget !== gallerySwiper.activeIndex) {
      setCurrentGroup(event.target.className);
      gallerySwiper.slideTo(slideTarget);
    }
  }

  function galleryUpdate () {
    let targetCat;
    let targetCatName = 'recently';
    let slideCats = [1, 7, 15, 21];
    let currentIndex = gallerySwiper.activeIndex;
    slideCats.forEach(cat => {
      if (targetCat === undefined) {
        let slideCatsIndex = (slideCats.indexOf(cat));
        let nextCat = slideCats[slideCatsIndex + 1];
        
        if ((currentIndex >= cat) && (currentIndex < nextCat)) {
          targetCat = cat;
          targetCatName = `cat${slideCatsIndex + 1}`;
        } else if ((nextCat === undefined) && (currentIndex > 0)) {
          targetCatName = `cat${slideCats.length}`;
        }
      }
    });

    currentIndex === 21 ? setCurrentGroup('recently') : setCurrentGroup(targetCatName);
    const slides = thumbsSwiper.slides;
    const prevSlide = thumbsSwiper.slides[currentIndex - 1];
    const nextSlide = thumbsSwiper.slides[currentIndex + 1];
    slides.forEach(slide => {
      slide.classList.remove('companion-slide');
    })
    const currentGroupSlide = thumbsSwiper.slides[currentIndex].getAttribute('data-group-slide');
    currentGroupSlide === '1' && nextSlide.classList.add('companion-slide');
    currentGroupSlide === '2' && prevSlide.classList.add('companion-slide');
  };

  function nextSlide(e) {
    e.preventDefault();
    gallerySwiper.slideNext();
  }

  function prevSlide(e) {
    e.preventDefault();
    gallerySwiper.slidePrev();
  }

  return (
    <section id="recently">
      
    </section>
  );
}

export default Recently;