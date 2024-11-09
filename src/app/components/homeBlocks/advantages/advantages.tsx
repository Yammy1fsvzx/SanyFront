"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './advantages.module.scss';

const Advantages: React.FC = () => {
    const advantagesData = [
        {
            image: 'https://sanywatches.ru/image/cache/catalog/banner/Home-Handpicked_Selection-150x150.png',
            title: 'Тщательно Подобранный выбор',
            text: 'Тщательно подобранные часы, воплощающие нашу непоколебимую приверженность совершенству и изысканности. Отражение нашего тщательного процесса кураторства и утонченного вкуса.',
        },
        {
            image: 'https://sanywatches.ru/image/cache/catalog/banner/Home-Reliable_Luxury_Watch_Retailer-150x150.png',
            title: 'Надежный Розничный продавец роскошных часов',
            text: 'Имея более чем двадцатилетний опыт в поиске, продаже и приобретении редких и исключительных часов, мы заслужили репутацию надежных и компетентных специалистов.',
        },
        {
            image: 'https://sanywatches.ru/image/cache/catalog/banner/Home-Guaranteed_Authenticity-150x150.png',
            title: 'Гарантированная Подлинность',
            text: 'Будьте уверены в подлинности ваших часов, подкрепленной нашей непоколебимой приверженностью поставлять только лучшие, оригинальные часы.',
        },
        {
            image: 'https://sanywatches.ru/image/cache/catalog/banner/Home-Effortless_Shipping_Returns-150x150.png',
            title: 'Простая доставка',
            text: 'Наслаждайтесь бесперебойной доставкой, поддерживаемой застрахованным процессом, который ставит во главу угла ваше удовлетворение и душевное спокойствие.',
        },
    ];

    return (
        <div className={styles.advantages} id="content-section">
            <h1 className={styles.title}>НАДЕЖНЫЙ ДИЛЕР РОСКОШНЫХ ЧАСОВ</h1>
            <div className={styles.grid}>
                {advantagesData.map((advantage, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <div key={index} ref={ref} className={styles.card}>
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={styles.imageContainer}
                            >
                                <img src={advantage.image} alt={advantage.title} className={styles.image} />
                                <h2 className={styles.cardTitle}>{advantage.title}</h2>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                className={styles.cardText}
                            >
                                {advantage.text}
                            </motion.p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
