'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Slider from './components/homeSlider/Slider';
import LogoCarousel from './components/homeLogoCarousel/LogoCarousel';
import CategoryBlocks from './components/homeBlocks/categories/categoryBlocks';
import ExlusiveOffers from './components/homeBlocks/exlusive/ExlusiveOffers';
import BrandBlocks from './components/homeBlocks/brands/brandBlocks';
import Advantages from './components/homeBlocks/advantages/advantages';
import Subscribe from './components/homeBlocks/subscribe/subscribe';

import styles from './page.module.scss';

const HomePage = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <main className={styles.contentWrapper}>
          <Slider />
          <LogoCarousel />
          <div className={styles.container}>
            <CategoryBlocks />
          </div>
          <ExlusiveOffers />
          <div className={styles.container}>
            <BrandBlocks />
          </div>
          <div className={styles.container}>
            <Advantages />
          </div>
          <Subscribe />
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default HomePage;