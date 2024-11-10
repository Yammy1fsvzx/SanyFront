import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Circle, CheckCircle } from 'react-feather';
import styles from './searchMenu.module.scss';
import SearchResults from './SearchResults';

const categories = [
  { name: "Часы", icon: "" },
  { name: "Ювелирные изделия", icon: "" },
  { name: "Аксессуары", icon: "" },
  { name: "Предметы искусства", icon: "" },
  { name: "Все разделы", icon: "" }
];

const productsData = [
  {
    id: 1, 
    name: "Rolex Datejust", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/084f4159d4e6ac4a7ff5f5363e3b3bb2_xxl.webp", 
    price: 7700, 
    link: "/clock/rolex-datejust-179173-02125446/" 
  },
  { 
    id: 2, 
    name: "Rolex Day-Date", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/51276cd9b79f8d5d78764051be00a0ae_xxl.webp", 
    price: 0,
    link: "/clock/rolex-day-date-228206-0027-05025714/" 
  },
  { 
    id: 3, 
    name: "Rolex Yacht-Master", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/8ec985d7488fd5591413e168cdcf3e49_xxl.webp", 
    price: 15800, 
    link: "/clock/rolex-yacht-master-116621-0002-02095640/" 
  },
  { 
    id: 4, 
    name: "Rolex Day-Date", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/48e6297d338fd5c3458b63aab4ee1751_xxl.webp", 
    price: 95500, 
    link: "/clock/rolex-day-date-128236-0003-23104326/" 
  },
  { 
    id: 5, 
    name: "Rolex Datejust", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/d0e70f932c3ccc15e5422fcb5a79756f_xxl.webp", 
    price: 10500, 
    link: "/clock/rolex-datejust-178273-0073-20114645/" 
  },
  { 
    id: 6, 
    name: "Rolex Daytona", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/452f3510d7f7cda0e014430718a5cc0e_xxl.webp", 
    price: 18900, 
    link: "/clock/rolex-daytona-116523-16013913/" 
  },
  { 
    id: 7, 
    name: "Rolex Oyster", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/7d288b99f30a2d171847e99edcc9384f_xxl.webp", 
    price: 14500, 
    link: "/clock/rolex-oyster-278344rbr-0034-25093218/" 
  },
  { 
    id: 8, 
    name: "Rolex Perpetual", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/3c0be695dd2e1dbbdbe2184174e3f166_xxl.webp", 
    price: 9000, 
    link: "/clock/rolex-perpetual-pakhtakor-02121808/" 
  },
  { 
    id: 9, 
    name: "Rolex Daytona", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/f60e76fd821b26969cf46bb505e83c6c_xxl.webp", 
    price: 36500, 
    link: "/clock/rolex-daytona-116528-goldblack-13072301/" 
  },
  { 
    id: 10, 
    name: "Rolex Yacht-Master", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/55a9859329348521ff7f6a31b6d6e407_xxl.webp", 
    price: 10750, 
    link: "/clock/rolex-yacht-master-116622-0001-03123612/" 
  },
  { 
    id: 11, 
    name: "Rolex Yacht-Master", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/05910e894eabd1da1cc34a5a0164c119_xxl.webp", 
    price: 13700, 
    link: "/clock/rolex-yacht-master-116622-20064207/" 
  },
  { 
    id: 12, 
    name: "Rolex Submariner", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/49a31eb57f66e0122530ebf9102040ba_xxl.webp", 
    price: 9900, 
    link: "/clock/rolex-submariner-16610-02084103/" 
  },
  { 
    id: 13, 
    name: "Rolex Submariner", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/5064a593f0ffaefa833f3a9cfdf34415_xxl.webp", 
    price: 8600, 
    link: "/clock/rolex-submariner-16610-15030940/" 
  },
  { 
    id: 14, 
    name: "Rolex Oyster", 
    brand: "Rolex", 
    category: "Часы", 
    imageUrl: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/f898f2fa3433fbc6c7cbe4b764eea1e4_xxl.webp", 
    price: 16500, 
    link: "/clock/rolex-oyster-116189pink-28091915/" 
  },
];

const SearchMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState<string>(categories[0]?.name || "");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target as Node)) {
      setIsSelectOpen(false);
    }
  };

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = productsData.filter(product => {
      const matchesCategory = category === "Все разделы" || product.category === category;
      const matchesSearchQuery = product.name.toLowerCase().includes(lowerCaseQuery);
      return matchesCategory && matchesSearchQuery;
    });
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setIsSelectOpen(false);
  };

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const toggleViewMode = () => {
    setIsGridView(prev => !prev);
  };

  useEffect(() => {
    if (!category && categories.length > 0) {
      setCategory(categories[0].name);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [category]);

  useEffect(() => {
    if (searchQuery.trim()) {
      filterProducts();
    } else {
      setFilteredProducts([]);
    }
  }, [category, searchQuery]);

  useEffect(() => {
    const handleResize = () => {
      setIsGridView(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={styles.searchMenu}
      ref={menuRef}
    >
      <div className={styles.cardWrapper}>
        <div className={styles.container}>
          <div className={styles.searchHead}>
            <h1 className={styles.title}>Поиск по сайту</h1>
            <button className={styles.closeButton} onClick={onClose}>
              <X size={30} />
            </button>
          </div>

          <div className={styles.searchField}>
            <div className={styles.selectWrapper} ref={selectWrapperRef}>
              <div
                className={styles.select}
                onClick={toggleSelect}
              >
                <span>{category || "Выберите категорию"}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: isSelectOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path
                    d="M5 7L10 12L15 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {isSelectOpen && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {categories.map((categoryItem) => (
                    <motion.div
                      key={categoryItem.name}
                      className={styles.dropdownItem}
                      onClick={() => handleCategoryChange(categoryItem.name)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category === categoryItem.name ? (
                        <CheckCircle size={20} color="#A27864" />
                      ) : (
                        <Circle size={20} color="#B4B4B6" />
                      )}
                      {categoryItem.icon}
                      {categoryItem.name}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Введите запрос"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className={styles.searchButton} disabled={category === ""}>
                <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 18.5L14 14.5M16 9.5C16 13.366 12.866 16.5 9 16.5C5.13401 16.5 2 13.366 2 9.5C2 5.63401 5.13401 2.5 9 2.5C12.866 2.5 16 5.63401 16 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {searchQuery.trim() ? (
          <div>
            <SearchResults filteredProducts={filteredProducts} isGridView={isGridView} searchQuery={searchQuery} />
            {filteredProducts.length > 0 && (
              <a href="/catalog/search" className={styles.viewAllLink}>
                Смотреть всё
              </a>
            )}
          </div>
        ) : (
          <div className={styles.lineSeparator}></div>
        )}

      </div>
    </motion.div>
  );
};

export default SearchMenu;