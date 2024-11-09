"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './brandBlocks.module.scss';

const brands = [
    { id: 1, name: 'Rolex', image: 'https://sanywatches.ru/image/cache/catalog/banner/Rolex_Main_Brand-360x470.webp' },
    { id: 2, name: 'Audemars Piguet', image: 'https://sanywatches.ru/image/cache/catalog/banner/Audemars_Piguet_Main_Brand-360x470.webp' },
    { id: 3, name: 'Patek Philippe', image: 'https://sanywatches.ru/image/cache/catalog/banner/Patek_Philippe_Main_Brand-360x470.webp' },
    { id: 4, name: 'Richard Mille', image: 'https://sanywatches.ru/image/cache/catalog/banner/Richard_Mille_Main_Brand-360x470.webp' },
];

const BrandBlocks: React.FC = () => {
  const [visibleBrands, setVisibleBrands] = useState<boolean[]>(new Array(brands.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      brands.forEach((_, index) => {
        const element = document.getElementById(`brand-${index}`);
        if (!element) return;
        const { top } = element.getBoundingClientRect();
        if (top < windowHeight && top > 0 && !visibleBrands[index]) {
          setVisibleBrands((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleBrands]);

  return (
    <div className={styles.brandsContainer}>
      <h2 className={styles.header}>Бренды</h2>
      <div className={styles.brandsGrid}>
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            id={`brand-${index}`}
            className={styles.cardContainer}
            initial={{ opacity: 0, scale: 0.5 }} // Start smaller
            animate={visibleBrands[index] ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 15,
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          >
            <motion.img
              src={brand.image}
              alt={brand.name}
              className={styles.cardImage}
              initial={{ scale: 1.1 }} // Start slightly larger
              animate={visibleBrands[index] ? { scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            />
            <motion.h3
              className={styles.title}
              initial={{ opacity: 0, y: 20 }} // Start with a slight upward movement
              animate={visibleBrands[index] ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 0.6,
              }}
            >
              {brand.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandBlocks;
