"use client";

import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import styles from './ExlusiveOffers.module.scss';
import FeatherIcon from 'feather-icons-react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Watch {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
}

const watches: Watch[] = [
  { id: 1, name: 'Classic', brand: 'Hublot', price: '$2,000', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/ca2a12a04aaa8c7ef82f6a216c95230d_xxl.webp' },
  { id: 2, name: 'Datejust', brand: 'Rolex', price: '$3,500', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/1fd00aa6a4012c62c9382eb921625ae9_xxl.webp' },
  { id: 3, name: 'Sportster', brand: 'Bovet', price: '$30,000', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/ca2a12a04aaa8c7ef82f6a216c95230d_xxl.webp' },
  { id: 4, name: 'Royal Oak', brand: 'Audemars Piguet', price: '$25,000', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/1fd00aa6a4012c62c9382eb921625ae9_xxl.webp' },
  { id: 5, name: 'Classic', brand: 'Hublot', price: '$2,000', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/ca2a12a04aaa8c7ef82f6a216c95230d_xxl.webp' },
  { id: 6, name: 'Datejust', brand: 'Rolex', price: '$3,500', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/1fd00aa6a4012c62c9382eb921625ae9_xxl.webp' },
  { id: 7, name: 'Sportster', brand: 'Bovet', price: '$30,000', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/ca2a12a04aaa8c7ef82f6a216c95230d_xxl.webp' },
  { id: 8, name: 'Royal Oak', brand: 'Audemars Piguet', price: '$25,000', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/1fd00aa6a4012c62c9382eb921625ae9_xxl.webp' },
];

const ExlusiveOffers: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(watches.length).fill(false));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    visibleItems.forEach((visible, index) => {
      const element = document.getElementById(`watch-${index}`);
      if (!element) return;
      const { top } = element.getBoundingClientRect();
      if (top < windowHeight && top > 0 && !visible) {
        setVisibleItems((prev) => {
          const newVisibility = [...prev];
          newVisibility[index] = true;
          return newVisibility;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleItems]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease',
    pauseOnHover: true,
  };

  return (
    <div className={styles.watchlistContainer}>
      <div className={styles.watchHeader}>
        <h2>Эксклюзивные предложения</h2>
        <a href="#">
          <button className={styles.browseMore}><span>Смотреть больше</span></button>
        </a>
      </div>
      <div className={styles.cardContainer}>
        <Slider ref={sliderRef} {...settings}>
          {watches.map((watch, index) => (
            <motion.div
              key={watch.id}
              id={`watch-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visibleItems[index] ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }} // Add hover effect
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.reference}>{watch.brand}</div>
                  <a href="#" className={styles.link}>
                    <FeatherIcon icon="arrow-up-right" size={24} />
                  </a>
                  <img src={watch.image} alt={watch.name} className={styles.image} />
                  <div className={styles.model}>{watch.name}</div>
                  <div className={styles.price}>{watch.price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExlusiveOffers;