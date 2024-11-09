'use client';

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import SearchAndSort from './components/SearchAndSort/SearchAndSort';
import ProductCard from './components/ProductCard/ProductCard';
import styles from './catalog.module.scss';
import { FilterGroup } from './types';
import Link from 'next/link';

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  category: string;
  reference: string;
  image: string;
  status: string;
  isNew: boolean;
}

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  const validCategories: string[] = ['watches', 'jewelry', 'accessories', 'artworks'];

  if (!validCategories.includes(category as string)) {
    return <div>Категория не найдена</div>;
  }

  const products: Product[] = [
    { id: 1, brand: 'Patek Philippe', name: 'AQUANAUT', price: 1000, category: 'watches', reference: '5164G-001', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/ca2a12a04aaa8c7ef82f6a216c95230d_xxl.webp', status: 'Абсолютно новое', isNew: true },
    { id: 2, brand: 'brand_b', name: 'Jewelry Item 1', price: 1500, category: 'jewelry', reference: '1235', image: '/path/to/image2.jpg', status: '', isNew: false },
    { id: 3, brand: 'brand_c', name: 'Accessory Item 1', price: 200, category: 'accessories', reference: '1236', image: '/path/to/image3.jpg', status: 'Абсолютно новое', isNew: true },
    { id: 4, brand: 'brand_d', name: 'Art Piece 1', price: 5000, category: 'artworks', reference: '1237', image: '/path/to/image4.jpg', status: '', isNew: false },
    { id: 5, brand: 'Patek Philippe', name: 'AQUANAUT 5167', price: 1200, category: 'watches', reference: '5167R-001', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/aad27a79b9319ce5ef5ef1e0e70d7721_xxl.webp', status: 'Абсолютно новое', isNew: true },
    { id: 6, brand: 'Maurice Lacroix', name: 'Pontos Reserve de Marche', price: 200, category: 'watches', reference: '5167R-001', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/1fd00aa6a4012c62c9382eb921625ae9_xxl.webp', status: '', isNew: false },
    { id: 7, brand: 'Perrelet', name: 'Classic', price: 1800, category: 'watches', reference: '5167R-001', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/c7ea9e2943363a0a425620cb6370d8d6_xxl.webp', status: '', isNew: false },
    { id: 8, brand: 'Tag Heuer', name: 'Link', price: 1200, category: 'watches', reference: '5167R-001', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/1e2d4e4cc410cde58314d67b619b35e6_xxl.webp', status: '', isNew: false },
    { id: 9, brand: 'Tag Heuer', name: 'Monaco', price: 1200, category: 'watches', reference: '5167R-001', image: 'https://backend.lombard-perspectiva.ru/storage/images/clock/assets/50a7245c605ddb64de0887667436a4b1_xxl.webp', status: '', isNew: false },
  ];

  const filteredProducts = products.filter(product => product.category === category);

  const categoryFilters: Record<string, FilterGroup[]> = {
    watches: [
      { title: 'Цена', type: 'range', options: [] },
      {
        title: 'Бренд',
        type: 'checkbox',
        options: [
          { value: 'Patek Philippe', label: 'Patek Philippe' },
          { value: 'Rolex', label: 'Rolex' },
          { value: 'brand_c', label: 'Brand C' },
        ],
      },
    ],
    jewelry: [
      { title: 'Цена', type: 'range', options: [] },
      {
        title: 'Тип',
        type: 'checkbox',
        options: [
          { value: 'ring', label: 'Кольцо' },
          { value: 'necklace', label: 'Ожерелье' },
        ],
      },
    ],
    accessories: [
      { title: 'Цена', type: 'range', options: [] },
      {
        title: 'Тип',
        type: 'checkbox',
        options: [
          { value: 'scarf', label: 'Шарф' },
          { value: 'hat', label: 'Шляпа' },
        ],
      },
    ],
    artworks: [
      { title: 'Цена', type: 'range', options: [] },
      {
        title: 'Тип',
        type: 'checkbox',
        options: [
          { value: 'painting', label: 'Картина' },
          { value: 'sculpture', label: 'Скульптура' },
        ],
      },
    ],
  };  

  const categoryHeaders: Record<string, string> = {
    watches: 'Швейцарские часы',
    jewelry: 'Ювелирные изделия',
    accessories: 'Аксессуары',
    artworks: 'Предметы искусства',
  };

  const categoryLinks: Record<string, string> = {
      watches: 'Швейцарские часы',
      jewelry: 'Ювелирные изделия',
      accessories: 'Аксессуары',
      artworks: 'Предметы искусства',
  };
  
  const categoryHeader = categoryHeaders[category as keyof typeof categoryHeaders] || 'Каталог';
  const otherCategories = validCategories.filter(cat => cat !== category).slice(0, 3);
  
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const filteredBySearch = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const applyFilters = (products: Product[]) => {
    let filtered = products;

    for (const [filterTitle, selectedValues] of Object.entries(selectedFilters)) {
      if (selectedValues.length > 0) {
        filtered = filtered.filter(product =>
          selectedValues.includes(product.brand.toLowerCase())
        );
      }
    }

    return filtered;
  };

  const sortedProducts = applyFilters(filteredBySearch).sort((a: Product, b: Product) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSortOrder('asc');
    setSelectedFilters({});
  };

  return (
    <main className={styles.contentWrapper}>
      <div className={styles.container}>
  
        <div className={styles.breadcrumbs}>
          <span><Link href="/">SanyWatches</Link> <span className={styles.breadcrumbsDash}>/</span> {categoryHeaders[category as keyof typeof categoryHeaders]}</span>
        </div>
  
        <div className={styles.catalogHeader}>
          <h1>{categoryHeader}</h1>
        </div>
  
        <div className={styles.catalog}>
          <FilterSidebar 
            filters={categoryFilters[category as keyof typeof categoryFilters]} 
            onReset={handleResetFilters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <div className={styles.main}>
            <SearchAndSort
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
  
            <div className={styles.catalogLinks}>
              <div className={styles.LinksContainer}>
                {otherCategories.map(cat => (
                  <span key={cat}>
                    <Link href={`/catalog/${cat}`}>{categoryLinks[cat]}</Link>
                  </span>
                ))}
              </div>
            </div>
  
            <div className={styles.productsGrid}>
              {sortedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={{ ...product, price: product.price.toString() }}
                />
              ))}
            </div>
          </div>
        </div>
  
      </div>
    </main>
  );
};

export default CategoryPage;
