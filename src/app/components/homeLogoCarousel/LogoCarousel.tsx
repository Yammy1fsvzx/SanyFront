'use client';

import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import styles from './LogoCarousel.module.scss';

const logos = [
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand1.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand2.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand3.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand1.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand2.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand3.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand1.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand2.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand3.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand1.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand2.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand3.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand1.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand2.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand3.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand1.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand2.com' },
  { src: 'https://w7.pngwing.com/pngs/756/82/png-transparent-rolex-logo-watch-brand-omega-sa-rolex-text-logo-rolex.png', href: 'https://brand3.com' },
];

const LogoCarousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(6);
      } else {
        setSlidesToShow(8);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5500,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    swipe: false,
    draggable: false,
    touchThreshold: 10,
  };

  return (
    <div 
      className={styles.carousel} 
      onMouseEnter={() => sliderRef.current?.slickPause()} 
      onMouseLeave={() => sliderRef.current?.slickPlay()}
    >
      <Slider ref={sliderRef} {...settings}>
        {logos.map((logo, index) => (
          <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${logo.href}`}>
            <img
              src={logo.src}
              alt={`Logo ${index + 1}`}
              className={styles.logo}
              loading="lazy"
              onError={(e) => { e.currentTarget.src = ''; }}
            />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;