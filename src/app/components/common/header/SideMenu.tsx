"use client";

import React from 'react';
import Link from 'next/link';
import styles from './sideMenu.module.scss';

const textContent = {
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
    contact: {
      RU: 'КОНТАКТЫ',
      EN: 'CONTACT',
    },
  },
  info: {
    info1: {
      RU: 'О магазине',
      EN: 'Information 1',
    },
    info2: {
      RU: 'Контакты',
      EN: 'Information 2',
    },
    info3: {
      RU: 'Политика конфиденциальности',
      EN: 'Information 3',
    },
  },
};

type Props = {
  language: 'RU' | 'EN';
  isOpen: boolean;
  onClose: () => void;
};

const SideMenu: React.FC<Props> = ({ language, isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <h1 className={styles.sideMenuH}>Меню</h1>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <nav className={styles.nav}>
          <h2>Категории</h2>
          <ul>
            <li>
              <Link href="/watches" onClick={onClose}>{textContent.navigation.watches[language]}</Link>
            </li>
            <li>
              <Link href="/jewelry" onClick={onClose}>{textContent.navigation.jewelry[language]}</Link>
            </li>
            <li>
              <Link href="/accessories" onClick={onClose}>{textContent.navigation.accessories[language]}</Link>
            </li>
            <li>
              <Link href="/artworks" onClick={onClose}>{textContent.navigation.artworks[language]}</Link>
            </li>
          </ul>
          <h2>Информация</h2>
          <ul>
            <li>
              <Link href="/info1" onClick={onClose}>{textContent.info.info1[language]}</Link>
            </li>
            <li>
              <Link href="/contacts" onClick={onClose}>{textContent.info.info2[language]}</Link>
            </li>
            <li>
              <Link href="/info3" onClick={onClose}>{textContent.info.info3[language]}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;