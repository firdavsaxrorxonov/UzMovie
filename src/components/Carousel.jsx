import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkeletonTheme } from 'react-loading-skeleton';
import CarouselSkeleton from './CarouselSkeleton';

function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [loading, setLoading] = useState(true);

  const images = [
    {
      src: 'https://www.yashrajfilms.com/images/default-source/movies/tiger-3/tiger-3_banner.jpg?sfvrsn=c63bdfcc_0',
      title: 'Tiger 3',
      aboutTitle: 'Film haqida malumot qachon ommaga taqdim qilingan va qachon sihlab chiqilishi boshlaghan',
      buttonText: "Ko'rish",
      secondButtonText: "Saqlash"
    },
    {
      src: 'https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg',
      title: 'The Avengers',
      aboutTitle: 'Film haqida malumot qachon ommaga taqdim qilingan va qachon sihlab chiqilishi boshlaghan',
      buttonText: "Ko'rish",
      secondButtonText: "Saqlash"
    },
    {
      src: 'https://i0.wp.com/teaser-trailer.com/wp-content/uploads/2019/01/Polar-new-banner.jpg?ssl=1',
      title: 'Polar',
      aboutTitle: 'Film haqida malumot qachon ommaga taqdim qilingan va qachon sihlab chiqilishi boshlaghan',
      buttonText: "Ko'rish",
      secondButtonText: "Saqlash"
    }
  ];

  useEffect(() => {
    const promises = images.map(img => {
      return new Promise(resolve => {
        const image = new Image();
        image.src = img.src;
        image.onload = resolve;
      });
    });

    Promise.all(promises).then(() => setLoading(false));
  }, []);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const style = {
    boxShadow: '0px -52px 62px -18px rgba(0, 0, 0, 1) inset',
  };

  return (
    <div className="w-full bg-black font-sans h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
      <SkeletonTheme baseColor="#cfcfcf" highlightColor="#e6e6e6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="w-full h-full"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i} className="relative flex items-center justify-center bg-white">
              {loading ? (
                <CarouselSkeleton />
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-20 left-5 max-w-[450px] md:top-40 md:left-15 z-10 text-white">
                    <h1 className="md:text-5xl text-2xl text-shadow-lg font-bold">{image.title}</h1>
                    <p className="mt-2 text-sm max-w-2xs text-shadow-lg md:max-w-full md:text-lg">{image.aboutTitle}</p>
                    <div className="flex items-center gap-2">
                      <button className="mt-3.5 rounded-lg px-6 sm:px-10 py-2 cursor-pointer bg-[#1AB196] border-2 border-[#1AB196] transition duration-200 hover:border-[#139a7d] text-white hover:bg-[#139a7d] text-sm md:text-xl font-semibold">
                        {image.buttonText}
                      </button>
                      <button className="mt-3.5 rounded-lg px-6 sm:px-10 py-2 cursor-pointer bg-[#1AB196] flex items-center gap-2 transition duration-200 text-white hover:bg-[#139a7d] text-sm md:text-xl font-semibold">
                        <FontAwesomeIcon icon={faBookmark} />
                        {image.secondButtonText}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}

          {!loading && (
            <div
              className="absolute bottom-4 right-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-[--swiper-theme-color] bg-[#00000017] backdrop-blur-md rounded-full shadow-md"
              slot="container-end"
            >
              <svg
                viewBox="0 0 48 48"
                ref={progressCircle}
                className="absolute left-0 top-0 z-10 w-full h-full transform -rotate-90"
                style={{
                  strokeDasharray: '125.6',
                  strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))',
                  stroke: '#1AB196',
                  strokeWidth: 4,
                  fill: 'none',
                }}
              >
                <circle cx="24" cy="24" r="20" />
              </svg>
              <span ref={progressContent}></span>
            </div>
          )}
        </Swiper>
      </SkeletonTheme>
    </div>
  );
}

export default Carousel;
