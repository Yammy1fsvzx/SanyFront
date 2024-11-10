import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './searchResults.module.scss';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  imageUrl: string;
  price: number;
  link: string;
}

interface SearchResultsProps {
  filteredProducts: Product[];
  isGridView: boolean;
  searchQuery: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ filteredProducts, isGridView, searchQuery }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div className={styles.resultsWrapper}>
      {filteredProducts.length > 0 ? (
        <>
          {!isMobile && (
            <motion.div
              className={isGridView ? styles.productsGrid : styles.productsList}
              initial={{ opacity: 0 }}
              animate={{ opacity: filteredProducts.length > 0 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.li
                  key={product.id}
                  className={styles.productCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <a href={product.link} className={styles.productLink}>
                    <div className={styles.productDetails}>
                      <p className={styles.productBrand}>
                        <span>{product.brand}</span>
                      </p>
                      <p className={styles.productName}>{product.name}</p>
                    </div>
                    <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                    <span className={styles.productPrice}>{product.price} $</span>
                  </a>
                </motion.li>
              ))}
            </motion.div>
          )}

          {isMobile && (
            <motion.div
              className={styles.productsListMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: filteredProducts.length > 0 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.li
                  key={product.id}
                  className={styles.productCardMobile}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <a href={product.link} className={styles.productLinkMobile}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={styles.productImageMobile}
                    />
                    <div className={styles.productDetailsMobile}>
                      <p className={styles.productBrandMobile}>
                        <span>{product.brand}</span>
                      </p>
                      <p className={styles.productNameMobile}>{product.name}</p>
                      <span className={styles.productPriceMobile}>{product.price} $</span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </motion.div>
          )}

          <motion.div
            className={styles.viewAllLinkWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: filteredProducts.length * 0.1 }}
          >
          </motion.div>
        </>
      ) : (
        searchQuery.trim() && (
          <div className={styles.noResults}>Товары не найдены по вашему запросу.</div>
        )
      )}
    </div>
  );
};

export default SearchResults;
