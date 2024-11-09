import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import Image from 'next/image';

import GooglePlayBanner from '../../../assets/globals/PlayMarket.png';
import AppStoreBanner from '../../../assets/globals/AppStore.png';

import FeatherIcon from 'feather-icons-react';

interface FooterProps {
  selectedLanguage: string;
}

const Footer: React.FC<FooterProps> = ({ selectedLanguage }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftSection}>
          <img
            src="https://sanywatches.ru/image/cache/catalog/logo_b-2200x800.jpg"
            alt={selectedLanguage === 'Русский' ? 'Логотип Sany' : 'Sany Logo'}
            className={styles.footerLogo}
            width={280}
            height={100}
          />
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/about">
                {selectedLanguage === 'Русский' ? 'О магазине' : 'About Us'}
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                {selectedLanguage === 'Русский' ? 'Связаться с нами' : 'Contact Us'}
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                {selectedLanguage === 'Русский' ? 'Политика конфиденциальности' : 'Privacy Policy'}
              </Link>
            </li>
          </ul>
          <div className={styles.appLinks}>
            <a href="https://apps.apple.com/ae/app/sany-watches/id6621251526" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStoreBanner.src}
                alt={selectedLanguage === 'Русский' ? 'App Store' : 'App Store'}
                height={56}
                width={177}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sany.watches" target="_blank" rel="noopener noreferrer">
              <img
                src={GooglePlayBanner.src}
                alt={selectedLanguage === 'Русский' ? 'Google Play' : 'Google Play'}
                height={56}
                width={177}
              />
            </a>
          </div>
        </div>
        <div className={styles.centerSection}>
          <div className={styles.contactInfo}>
            <h3>{selectedLanguage === 'Русский' ? 'Дубай' : 'Dubai'}</h3>
            <p>
              <FeatherIcon icon='map-pin' size={20} /> {' '}
              {selectedLanguage === 'Русский'
                ? 'The Opus by OMNIYAT designed by Zaha Hadid'
                : 'The Opus by OMNIYAT designed by Zaha Hadid'}
            </p>
            <p>
              <FeatherIcon icon='phone' size={20} /> +971 04 123 456
            </p>
          </div>
          <div className={styles.contactInfo}>
            <h3>{selectedLanguage === 'Русский' ? 'Москва' : 'Moscow'}</h3>
            <p>
              <FeatherIcon icon='map-pin' size={20} /> {' '}
              {selectedLanguage === 'Русский'
                ? 'Рублево Успенское Шоссе, Жуковка 71'
                : 'Rublevskoye Highway, Zhukovka 71'}
            </p>
            <p>
              <FeatherIcon icon='phone' size={20} /> +7 965 333 8881
            </p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.catalogSection}>
            <h3>{selectedLanguage === 'Русский' ? 'Каталог' : 'Catalog'}</h3>
            <ul>
              <li>
                <Link href="/catalog/watches">
                  {selectedLanguage === 'Русский' ? 'Швейцарские часы' : 'Swiss Watches'}
                </Link>
              </li>
              <li>
                <Link href="/catalog/jewelry">
                  {selectedLanguage === 'Русский' ? 'Ювелирные изделия' : 'Jewelry'}
                </Link>
              </li>
              <li>
                <Link href="/catalog/accessories">
                  {selectedLanguage === 'Русский' ? 'Аксессуары' : 'Accessories'}
                </Link>
              </li>
              <li>
                <Link href="/catalog/art">
                  {selectedLanguage === 'Русский' ? 'Предметы искусства' : 'Art Items'}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.servicesSection}>
            <h3>{selectedLanguage === 'Русский' ? 'Услуги' : 'Services'}</h3>
            <ul>
              <li>
                <Link href="/services/watch-buyout">
                  {selectedLanguage === 'Русский' ? 'Выкуп часов' : 'Watch Buyout'}
                </Link>
              </li>
              <li>
                <Link href="/services/art-buyout">
                  {selectedLanguage === 'Русский' ? 'Выкуп живописи' : 'Art Buyout'}
                </Link>
              </li>
              <li>
                <Link href="/services/jewelry-evaluation">
                  {selectedLanguage === 'Русский' ? 'Оценка ювелирных изделий' : 'Jewelry Evaluation'}
                </Link>
              </li>
              <li>
                <Link href="/services/diamond-purchase">
                  {selectedLanguage === 'Русский' ? 'Покупка бриллиантов' : 'Diamond Purchase'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; 2024 Sany. {selectedLanguage === 'Русский' ? 'Все права защищены.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;