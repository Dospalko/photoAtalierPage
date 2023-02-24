import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
// import required modules
import { Navigation, Pagination } from 'swiper';
// import data
import { products } from '../data';
// import icons
import { HiPlus } from 'react-icons/hi';

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='productSlider min-h-[1300px]'
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 mb-40 lg:grid-cols-4 lg:gap-[50px]'>
              {page.productList.map((product, index) => {
                const { image, name} = product;
                return (
                  <div
                    className='w-full max-w-[290px] h-[380px] text-left'
                    key={index}
                  >
                    <div className='border shadow-md transition-all bg-[#f0f0f2] hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[400px] flex items-center justify-center   relative duration-300'>
                      <a href={image.type}>
                      <img src={image.type} alt='' />
                      </a>
                    </div>
                    <div className='font-semibold lg:text-xl'>{name}</div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;