import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatherIcon from 'feather-icons-react'; // Feather Icons
import styles from './ProductSpecifications.module.scss';

interface Specification {
  label: string;
  value: string;
}

interface ProductSpecificationsProps {
  specifications: Specification[];
  paymentAndDeliveryText: string;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ specifications, paymentAndDeliveryText }) => {
  const [isExpandedSpecs, setIsExpandedSpecs] = useState(true);
  const [isExpandedPayment, setIsExpandedPayment] = useState(false);

  const halfLength = Math.ceil(specifications.length / 2);

  return (
    <div className={styles.productSpecifications}>
      {/* Меню Характеристик */}
      <motion.div
        className={styles.specificationSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className={styles.expandButton}
          type="button"
          onClick={() => setIsExpandedSpecs(!isExpandedSpecs)}
        >
          Характеристики
          <motion.div
            className={styles.icon}
            animate={{ rotate: isExpandedSpecs ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FeatherIcon icon="chevron-down" size={21} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpandedSpecs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={styles.specificationsContainer}
            >
              <div className={styles.specificationsContent}>
                <motion.div
                  className={styles.specificationsColumn}
                  initial={{ y: 20, opacity: 0 }}  // Начальное положение снизу
                  whileInView={{ y: 0, opacity: 1 }}  // Конечное положение
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {specifications.slice(0, halfLength).map((spec, index) => (
                    <motion.div
                      key={index}
                      className={styles.specificationItem}
                      initial={{ opacity: 0, y: 10 }}  // Начало анимации снизу
                      whileInView={{ opacity: 1, y: 0 }}  // Конечная позиция
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={styles.specificationLabel}>{spec.label}</div>
                      <div className={styles.specificationValue}>{spec.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className={styles.specificationsColumn}
                  initial={{ y: 20, opacity: 0 }}  // Начальное положение снизу
                  whileInView={{ y: 0, opacity: 1 }}  // Конечное положение
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {specifications.slice(halfLength).map((spec, index) => (
                    <motion.div
                      key={index + halfLength}
                      className={styles.specificationItem}
                      initial={{ opacity: 0, y: 10 }}  // Начало анимации снизу
                      whileInView={{ opacity: 1, y: 0 }}  // Конечная позиция
                      transition={{ duration: 0.3, delay: (index + halfLength) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={styles.specificationLabel}>{spec.label}</div>
                      <div className={styles.specificationValue}>{spec.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Меню Оплаты и Доставки */}
      <motion.div
        className={styles.specificationSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className={styles.expandButton}
          type="button"
          onClick={() => setIsExpandedPayment(!isExpandedPayment)}
        >
          Оплата и Доставка
          <motion.div
            className={styles.icon}
            animate={{ rotate: isExpandedPayment ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FeatherIcon icon="chevron-down" size={18} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpandedPayment && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={styles.paymentAndDeliveryContainer}
            >
              <div className={styles.paymentAndDeliveryContent}>
                <motion.p
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {paymentAndDeliveryText}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProductSpecifications;