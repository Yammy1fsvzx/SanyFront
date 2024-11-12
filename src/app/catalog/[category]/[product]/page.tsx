'use client';

import { useState } from "react";
import styles from "./page.module.scss";
import Link from 'next/link';
import { Heart } from 'react-feather';
import { AnimatePresence, motion } from 'framer-motion';

import ProductSpecifications from "./components/ProductSpecifications";

const productData = {
  productName: "Audemars Piguet",
  productStatus: "Абсолютно новое",
  productModel: "Royal Oak Selfwinding Chronograph 41 mm",
  productPrice: 74500,
  productReference: "128348rbr-0049",
  productImage: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/198b430930f30229c3c9049d26d4dad2_xxl.webp",
  productAdditionalImages: [
    "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/3ffbe51ed4492f40dadf8a68ad9c8a51_xxl.webp",
    "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/c81da7dc7669ad3d854119c308682c95_xxl.webp",
    "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/926932b1fff00bd376256fd8c99f515b_xxl.webp",
    "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/a44ba590f0eb93af19aa295a09174ba4_xxl.webp"
  ],
  specifications: [
    { label: 'ID товара', value: '33810' },
    { label: 'Тип', value: 'Классические' },
    { label: 'Материал корпуса', value: '18-к розовое золото' },
    { label: 'Водонепроницаемость', value: '120 м' },
    { label: 'Диаметр корпуса', value: '40.5 мм' },
    { label: 'Цвет циферблата', value: 'Синий' },
    { label: 'Тип механизма', value: 'Автоматический' },
    { label: 'Функции', value: 'Дата, часы, минуты, секунды' },
    { label: 'Запас хода', value: '50ч' },
    { label: 'Калибр', value: 'CH 28-520 C FUS' },
    { label: 'Материал ремешка', value: 'Браслет из розового золота 18к' },
    { label: 'Комплектация', value: 'полный комплект' },
    { label: 'Состояние', value: 'абсолютно новые, 2024 год' }
  ],
  paymentAndDeliveryText: `
    Оплата: Мы принимаем все основные способы оплаты, включая карты Visa, MasterCard, а также электронные кошельки.
    Доставка: Мы обеспечиваем доставку по всей стране. Ожидаемое время доставки — 3-5 рабочих дней.
    В случае возникновения вопросов наша служба поддержки всегда готова помочь.
  `
};

export default function ProductPage() {
  const [isActive, setIsActive] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive((prev) => !prev);
  };

  return (
      <AnimatePresence mode="wait">
        <motion.div
          key="product-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.contentWrapper}>
            <div className={styles.container}>

              <motion.div 
                className={styles.breadcrumbs}
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span>
                  <Link href="/">SanyWatches</Link> <span className={styles.breadcrumbsDash}>/</span> <Link href="/catalog/watches">Швейцарские часы</Link> <span className={styles.breadcrumbsDash}>/</span> <span>Товар</span>
                </span>
              </motion.div>

              <div className={styles.contentContainer}>
                <motion.div 
                  className={styles.productDetails}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.productHeader}>
                    <h1>{productData.productName}</h1>

                    <div className={styles.productStat}>
                      <span>{productData.productStatus}</span>
                    </div>
                  </div>

                  <div className={styles.productModel}>
                    <span>{productData.productModel}</span>
                  </div>

                  <div className={styles.productPrice}>
                    <p>{productData.productPrice} $</p>
                  </div>

                  <div className={styles.productReference}>
                    <div className={styles.referenceText}>
                      <span>Референс: {productData.productReference}</span>
                    </div>

                    <div className={styles.actionFavorite} onClick={toggleFavorite}>
                      <Heart className={`${styles.heartIcon} ${isActive ? styles.active : ''}`} />
                    </div>
                  </div>

                  <div className={styles.productImageContainer}>
                    <motion.div 
                      className={styles.productImage}
                      initial={{ opacity: 0 }} 
                      whileInView={{ opacity: 1 }} 
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <img src={productData.productImage} alt="image" />
                    </motion.div>
                  </div>

                </motion.div>

                <motion.div 
                  className={styles.productImagesCollection}
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.catalogItemPhotosGrid}>
                    {productData.productAdditionalImages.map((img, index) => (
                      <a href="#" key={index} className={styles.catalogItemPhoto}>
                        <div className={styles.imageWrapper}>
                          <img src={img} alt={`Additional image ${index + 1}`} className={styles.previewImage} />
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              <ProductSpecifications 
                specifications={productData.specifications}
                paymentAndDeliveryText={productData.paymentAndDeliveryText}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
  );
}