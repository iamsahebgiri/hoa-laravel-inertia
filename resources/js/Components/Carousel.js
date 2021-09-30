import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

SwiperCore.use([Autoplay, Pagination, Navigation])

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        className="mySwiper h-full w-full relative"
      >
        {[1, 2, 3, 4].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="h-48 md:h-80 bg-white">
              <img
                src="https://source.unsplash.com/1600x900/?college"
                className="object-cover block w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className="hidden md:flex absolute z-10 justify-between w-full -mt-10"
          style={{ top: '50%' }}
        >
          <button className="prev h-20 p-1 shadow-md bg-white rounded-r-md">
            <HiChevronLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button className="next h-20 p-1 shadow-md bg-white rounded-l-md">
            <HiChevronRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </Swiper>
    </div>
  )
}
