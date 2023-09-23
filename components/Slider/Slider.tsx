import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Slider.scss";

import image1 from "@/public/photos/2023-05-23_21-30-27-min.jpg";
import image2 from "@/public/photos/2023-05-23_21-27-26-min.jpg";
import image3 from "@/public/photos/2023-05-23_21-36-18-min.jpg";
import image4 from "@/public/photos/2023-05-23_21-28-34-min.jpg";
import image5 from "@/public/photos/2023-05-23_21-38-32-min.jpg";
import image6 from "@/public/photos/2023-05-23_21-31-44-min.jpg";
import image7 from "@/public/photos/2023-05-23_21-32-25-min.jpg";
import image8 from "@/public/photos/2023-05-23_21-47-55-min.jpg";
import image9 from "@/public/photos/2023-05-23_21-34-43-min.jpg";
import image10 from "@/public/photos/2023-05-23_21-31-13-min.jpg";

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
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image className="big-img" src={image} alt={`Picture ${index}`} />
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
            <Image  className="min-img" src={image} alt={`Picture ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
