"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './categoryBlocks.module.scss';

const categories = [
  { id: 1, name: 'Швейцарские часы', image: 'https://sanywatches.ru/image/cache/catalog/banner/2-1876x2560.jpg' },
  { id: 2, name: 'Ювелирные изделия', image: 'https://sanywatches.ru/image/cache/catalog/banner/1-1876x2560w.jpg' },
  { id: 3, name: 'Аксессуары', image: 'https://sanywatches.ru/image/cache/catalog/banner/4-1876x2560w.jpg' },
  { id: 4, name: 'Предметы искусства', image: 'https://sanywatches.ru/image/cache/catalog/banner/3-1876x2560w.jpg' },
];

const CategoryBlocks: React.FC = () => {
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>(new Array(categories.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      categories.forEach((_, index) => {
        const element = document.getElementById(`category-${index}`);
        if (!element) return;
        const { top } = element.getBoundingClientRect();
        if (top < windowHeight && top > 0 && !visibleCategories[index]) {
          setVisibleCategories((prev) => {
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
  }, [visibleCategories]);

  return (
    <div className={styles.categoriesGrid}>
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          id={`category-${index}`}
          className={styles.cardContainer}
          initial={{ opacity: 0, y: 60 }}
          animate={visibleCategories[index] ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.6,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <motion.img
            src={category.image}
            alt={category.name}
            className={styles.cardImage}
            initial={{ scale: 1.1 }}
            animate={visibleCategories[index] ? { scale: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
          <motion.h3
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={visibleCategories[index] ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              duration: 0.6,
            }}
          >
            {category.name}
          </motion.h3>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryBlocks;