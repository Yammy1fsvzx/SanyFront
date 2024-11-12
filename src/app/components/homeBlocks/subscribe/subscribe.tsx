"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bell, Coffee, Gift, Headphones } from 'react-feather';
import styles from './subscribe.module.scss';

import TelegramQR from '../../../assets/globals/TESTQR.png';

const features = [
    {
        icon: <Bell />,
        title: 'Уведомления',
        description: 'Будьте в курсе новых поступлений и акций.',
    },
    {
        icon: <Gift />,
        title: 'Эксклюзивные предложения',
        description: 'Получайте специальные предложения только для подписчиков.',
    },
    {
        icon: <Headphones />,
        title: 'Поддержка клиентов',
        description: 'Мы всегда на связи, чтобы помочь вам с любыми вопросами.',
    },
    {
        icon: <Coffee />,
        title: 'Новости',
        description: 'Следите за последними новостями и событиями.',
    },
];

const Subscribe: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className={styles.subscribeContainer}>
            <div ref={ref} className={styles.subscribe}>
                <div className={styles.subscribeContent}>
                    <div className={styles.subscribeTexts}>
                        <motion.h2
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                            className={styles.title}
                        >
                            Подписывайтесь на нас в <span>Телеграм!</span>
                        </motion.h2>
                    </div>
                    <div className={styles.features}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                                className={styles.feature}
                            >
                                <div className={styles.icon}>{feature.icon}</div>
                                <div className={styles.featherTexts}>
                                    <motion.h3
                                        className={styles.featureTitle}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                                    >
                                        {feature.title}
                                    </motion.h3>
                                    <motion.p
                                        className={styles.featureDescription}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        href="https://t.me/codewizzards"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        <button className={styles.browseMore}><span>Подписаться</span></button>
                    </motion.a>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }} 
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className={styles.qrCodeContainer}
                >
                    <motion.img
                        src={TelegramQR.src}
                        alt="QR Code"
                        className={styles.qrCode}
                        height={350}
                        width={350}
                        initial={{ scale: 0.8 }}
                        animate={isInView ? { scale: 1} : {}}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Subscribe;