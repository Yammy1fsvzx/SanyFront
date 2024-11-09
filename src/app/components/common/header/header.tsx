"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import SideMenu from './SideMenu';
import CartMenu from './CartMenu';
import FeatherIcon from 'feather-icons-react';
import { motion } from 'framer-motion';

const textContent = {
  language: {
    selected: { RU: 'RU', EN: 'EN' },
  },
  currency: {
    selected: { USD: '$ USD', EUR: '€ EUR', RUB: '₽ RUB', AED: '.د.إ AED' },
  },
  logo: {
    RU: 'Sany',
    EN: 'Sany',
  },
  navigation: {
    watches: {
      RU: 'ШВЕЙЦАРСКИЕ ЧАСЫ',
      EN: 'SWISS WATCHES',
    },
    jewelry: {
      RU: 'ЮВЕЛИРНЫЕ ИЗДЕЛИЯ',
      EN: 'JEWELRY',
    },
    accessories: {
      RU: 'АКСЕССУАРЫ',
      EN: 'ACCESSORIES',
    },
    artworks: {
      RU: 'ПРЕДМЕТЫ ИСКУССТВА',
      EN: 'ARTWORKS',
    },
    contacts: {
      RU: 'КОНТАКТЫ',
      EN: 'CONTACT',
    },
  },
};

type Language = keyof typeof textContent.language.selected;
type Currency = keyof typeof textContent.currency.selected;

const Header: React.FC = () => {
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('RU');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isLevel1Visible, setLevel1Visible] = useState(true);
  const [level2Height, setLevel2Height] = useState(110);
  const [level2LogoHeight, setLevel2LogoHeight] = useState(110);
  const [isMobile, setIsMobile] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  const handleCurrencyChange = (curr: Currency) => {
    setCurrency(curr);
    setCurrencyOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${styles.dropdown}`)) {
      setLanguageOpen(false);
      setCurrencyOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setLevel1Visible(false);
        setLevel2Height(70);
        setLevel2LogoHeight(70);
      } else {
        setLevel1Visible(true);
        setLevel2Height(110);
        setLevel2LogoHeight(110);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setSideMenuOpen(true);
  };

  const closeSideMenu = () => {
    setSideMenuOpen(false);
  };

  const handleContactClick = () => {
    alert("Not Found : 404");
  };

  const handleSearchClick = () => {
    alert("Not Found : 404");
  };

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const closeCartMenu = () => {
    setCartOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.mainHeader}>
      <div className={`${styles.level1} ${!isLevel1Visible ? styles.hide : ''}`}>
        <motion.div
          className={styles.languageCurrency}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.dropdown}
               onMouseEnter={() => setLanguageOpen(true)}
               onMouseLeave={() => setLanguageOpen(false)}>
            <div 
              className={styles.selected} 
              onClick={() => setLanguageOpen(!isLanguageOpen)}
            >
              {textContent.language.selected[language]}
              <span className={isLanguageOpen ? styles.arrowUp : styles.arrowDown} />
            </div>
            <motion.div className={`${styles.dropdownList} ${isLanguageOpen ? styles.open : ''}`}
              initial={{ opacity: 0, y: -10 }}
              animate={isLanguageOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {Object.keys(textContent.language.selected).map(lang => (
                <div key={lang} onClick={() => handleLanguageChange(lang as Language)} className={styles.dropdownItem}>
                  {textContent.language.selected[lang as Language]}
                </div>
              ))}
            </motion.div>
          </div>
          <div className={styles.dropdown}
               onMouseEnter={() => setCurrencyOpen(true)}
               onMouseLeave={() => setCurrencyOpen(false)}>
            <div 
              className={styles.selected} 
              onClick={() => setCurrencyOpen(!isCurrencyOpen)} 
            >
              {currency}
              <span className={isCurrencyOpen ? styles.arrowUp : styles.arrowDown} />
            </div>
            <motion.div className={`${styles.dropdownList} ${isCurrencyOpen ? styles.open : ''}`}
              initial={{ opacity: 0, y: -10 }}
              animate={isCurrencyOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {Object.keys(textContent.currency.selected).map(curr => (
                <div key={curr} onClick={() => handleCurrencyChange(curr as Currency)} className={styles.dropdownItem}>
                  {textContent.currency.selected[curr as Currency]}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.level2Container}>
        <motion.div
          className={styles.level2} 
          style={{ height: `${level2Height}px`, transition: 'height 0.7s ease' }}
        >
          <div className={styles.leftButtons}>
            <motion.button 
              className={styles.button} 
              onClick={handleMenuClick}
            >
              <FeatherIcon icon='menu' size={32} />
              <span>Меню</span>
            </motion.button>

            <motion.button 
              className={styles.button} 
              onClick={handleContactClick} 
              id={styles.contactbutton}
            >
              <FeatherIcon icon='phone-forwarded' size={32} />
              <span>Связаться</span>
            </motion.button>

            <Link className={styles.phoneLogo} href="/">
              <motion.img 
                src="https://sanywatches.ru/image/cache/catalog/logo_b-2200x800.jpg" 
                alt="Логотип"
                className={styles.logoImage}
                style={{ height: `${level2LogoHeight}px`, transition: 'height 0.7s ease' }}
              />
            </Link>
          </div>

          <Link className={styles.logo} href="/">
            <motion.img 
              src="https://sanywatches.ru/image/cache/catalog/logo_b-2200x800.jpg" 
              alt="Логотип"
              className={styles.logoImage}
              style={{ height: `${level2LogoHeight}px`, transition: 'height 0.7s ease' }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <div className={styles.rightButtons}>
            <motion.button 
              className={styles.button} 
              onClick={handleSearchClick}
            >
              <FeatherIcon icon='search' size={32} />
              <span>Поиск</span>
            </motion.button>
            <motion.button 
              className={styles.button} 
              onClick={handleCartClick}
            >
              <FeatherIcon icon='shopping-bag' size={32} />
              <span>Корзина</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div className={styles.level3}>
        <nav className={styles.nav}>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Object.entries(textContent.navigation).map(([key, value]) => (
              <li key={key}>
                <Link href={key === 'contacts' ? `/${key}` : `/catalog/${key}`}>
                  {value[language]}
                </Link>
              </li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
      

      <SideMenu 
        language={language} 
        isOpen={isSideMenuOpen} 
        onClose={closeSideMenu} 
      />

      <CartMenu
        items={[]} 
        isOpen={isCartOpen} 
        onClose={closeCartMenu} 
      />
    </header>
  );
};

export default Header;