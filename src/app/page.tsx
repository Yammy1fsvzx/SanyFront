import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
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
    <div>
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
    </div>
  );
};

export default HomePage;