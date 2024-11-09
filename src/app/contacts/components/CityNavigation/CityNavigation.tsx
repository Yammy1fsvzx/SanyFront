'use client';

import React, { useState } from 'react';
import styles from './CityNavigation.module.scss';

const cities = ['Москва', 'Дубай'];

const CityNavigation: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string>('Москва');

  return (
    <nav className={styles.cityNavigation}>
      <ul>
        {cities.map((city) => (
          <li
            key={city}
            className={activeCity === city ? styles.active : ''}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CityNavigation;