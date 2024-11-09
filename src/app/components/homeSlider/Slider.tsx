"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styles from './Slider.module.scss';

const Slider = () => {
    const [autoplay, setAutoplay] = useState(true);

    const products = [
        {
          id: 1,
          brand: 'Patek Philippe',
          name: 'Nautilus',
          price: '138500 $',
          availability: 'В наличии',
          image: 'https://sanywatches.ru/image/cache/catalog/slider/839fe5294cff0329e62f9a1417c8b88a_xxl-1200x1000w.webp',
          secondaryImage: 'https://sanywatches.ru/image/cache/catalog/slider/75556c3c237fb693ce998067a345a4ee_xxl-300x450w.webp',
        },
        {
          id: 2,
          brand: 'Patek Philippe',
          name: 'Nautilus',
          price: '138500 $',
          availability: 'В наличии',
          image: 'https://sanywatches.ru/image/cache/catalog/slider/a81ac22bbd60c4eb54a02fd1271785ec_xxl-1000x1000h.webp',
          secondaryImage: 'https://sanywatches.ru/image/cache/catalog/slider/0de0f5d6cb0424eed952111cd76c2289_xxl-300x450w.webp',
        },
        {
          id: 3,
          brand: 'Patek Philippe',
          name: 'Aquanaut',
          price: '84500 $',
          availability: 'В наличии',
          image: 'https://sanywatches.ru/image/cache/catalog/slider/414b2ba05c93913560236158d1776631_xxl-1000x1000h.webp',
          secondaryImage: 'https://sanywatches.ru/image/cache/catalog/slider/fd230b54089df7217997d9281138c39b_xxl-300x450h.webp',
        },
        {
          id: 4,
          brand: 'Audemars Piguet',
          name: 'Royal Oak',
          price: '84500 $',
          availability: 'В наличии',
          image: 'https://sanywatches.ru/image/cache/catalog/slider/50d0323346b18d2007206254b27886f9_xxl-1000x1000h.webp',
          secondaryImage: 'https://sanywatches.ru/image/cache/catalog/slider/75cd619182976a719f922324642c4410_xxl-300x450w.webp',
        },
    ];

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={autoplay ? {
                delay: 6000,
                disableOnInteraction: false,
            } : false}
            loop={true}
            speed={1500}
            touchRatio={1}
            modules={[Autoplay]}
            className={styles.slider}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id} className={styles.slide}>
                    <div
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className={styles.textContainer}>
                        <div className={styles.textTop}>
                            <p className={styles.itemName}>{product.brand}</p>
                            <p className={styles.itemText}>{product.name}</p>
                        </div>
                        <div className={styles.sliderImage}>
                            <img src={product.secondaryImage} alt={product.name} loading="lazy" />
                        </div>
                        <div className={styles.priceContainer}>
                            <p className={styles.itemPrice}>{product.price}</p>
                            <p className={styles.itemInStock}>{product.availability}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;