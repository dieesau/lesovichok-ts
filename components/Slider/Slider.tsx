import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Slider.scss";

import image1 from "@/public/photos/2023-05-23_21-30-27.jpg";
import image2 from "@/public/photos/2023-05-23_21-59-01.jpg";
import image3 from "@/public/photos/2023-05-23_22-09-49.jpg";
import image4 from "@/public/photos/2023-05-23_21-58-07.jpg";
import image5 from "@/public/photos/2023-05-23_21-38-32.jpg";
import image6 from "@/public/photos/2023-05-23_21-48-43.jpg";
import image7 from "@/public/photos/2023-05-23_21-57-31.jpg";
import image8 from "@/public/photos/2023-05-23_21-57-14.jpg";
import image9 from "@/public/photos/2023-05-23_21-48-28.jpg";
import image10 from "@/public/photos/2023-05-23_21-31-13.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image className="h-[400px]" src={image} alt={`Picture ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image  className="h-[100px]" src={image} alt={`Picture ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
