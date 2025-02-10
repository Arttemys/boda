import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';


const fotos = [
  {
    src: '/dinner.jpeg',
    alt: 'dinner',
  },
  {
    src: '/disney.jpeg',
    alt: 'disney',
  },
  {
    src: '/selfie.jpeg',
    alt: 'selfie',
  },
  {
    src: '/formal.jpeg',
    alt: 'formal',
  },
  {
    src: '/runner.jpeg',
    alt: 'runner',
  },
  {
    src: '/smile.jpeg',
    alt: 'smile',
  },
];

export const CustomSlider = () => {
  return <Splide
    options={{
      type: 'slide',
      perPage: 3,
      perMove: 1,
      gap: '3rem',
      width: '100%',
      pagination: true,
      arrows: true,
      padding: '2rem',
      breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,          
        },
      }
    }}
  >
    {
      fotos.map((foto, index) => (
        <SplideSlide key={foto.src + index}>
          <Image
            alt={foto.alt}
            src={foto.src}
            width={300}
            height={300}
            style={{
              objectFit: 'cover',
              width: '100%',
              borderRadius: '16px'
            }}
          />
        </SplideSlide>
      ))
    }
  </Splide >
}