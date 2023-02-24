import React from 'react';

import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {newInStore} from '../data'

const NewItemsSlider = () => {
  return <Swiper grabCursor={true} breakpoints={{
    320: {
      slidesPerView: 2,
      spaceBetween: 18,

    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      
    }
  }}>
  
  </Swiper>;
};

export default NewItemsSlider;
