import React from "react";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioSlider from "./PortfolioSlider";
import { Stack } from "@mui/system";

const info = {
    first: {
        top: 'Template',
        bottom: 'Creative Agency',
        img: 'https://finibus-react.b-cdn.net/images/portfolio/portfolio-1.jpg'
    },
    second: {
        top: 'UI Kit',
        bottom: 'E-Shop Ecommerce',
        img: 'https://finibus-react.b-cdn.net/images/portfolio/portfolio-2.jpg'
    },
    third: {
        top: 'Software',
        bottom: 'Desktop Mockup',
        img: 'https://finibus-react.b-cdn.net/images/portfolio/portfolio-3.jpg'
    },
    fourth: {
        top: 'Graphic',
        bottom: 'Art Design',
        img: 'https://finibus-react.b-cdn.net/images/portfolio/portfolio-4.jpg'
    },
    fifth: {
        top: 'App',
        bottom: 'Mobile Crypto Wallet',
        img: 'https://finibus-react.b-cdn.net/images/portfolio/portfolio-5.jpg'
    },
    sixth: {
        top: 'Template',
        bottom: 'Creative Agency',
        img: 'https://finibus-react.b-cdn.net/images/portfolio/portfolio-6.jpg'
    },
    
}

const PortfolioBottom = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      <Stack>
        <SwiperSlide>
          <PortfolioSlider top={info.first.top} bottom={info.first.bottom} img={info.first.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.second.top} bottom={info.second.bottom} img={info.second.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.third.top} bottom={info.third.bottom} img={info.third.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.fourth.top} bottom={info.fourth.bottom} img={info.fourth.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.fifth.top} bottom={info.fifth.bottom} img={info.fifth.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.sixth.top} bottom={info.sixth.bottom} img={info.sixth.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.first.top} bottom={info.first.bottom} img={info.first.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.second.top} bottom={info.second.bottom} img={info.second.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.third.top} bottom={info.third.bottom} img={info.third.img} />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioSlider top={info.fourth.top} bottom={info.fourth.bottom} img={info.fourth.img} />
        </SwiperSlide>
      </Stack>
    </Swiper>
  );
};

export default PortfolioBottom;
