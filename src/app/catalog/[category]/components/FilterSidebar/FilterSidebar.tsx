'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import FeatherIcon from 'feather-icons-react';
import styles from './FilterSidebar.module.scss';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterGroup {
  title: string;
  options: FilterOption[];
  type?: 'checkbox' | 'range';
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  onReset: () => void;
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
}


const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onReset, selectedFilters, setSelectedFilters }) => {
  const [openFilterIndex, setOpenFilterIndex] = useState<number | null>(null);

  const toggleFilterGroup = (index: number) => {
    setOpenFilterIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleCheckboxChange = (filterTitle: string, value: string) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterTitle] || [];
      if (currentValues.includes(value)) {
        return { ...prev, [filterTitle]: currentValues.filter(v => v !== value) };
      } else {
        return { ...prev, [filterTitle]: [...currentValues, value] };
      }
    });
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <div className={styles.filtersWrapper}>
      <h3 className={styles.filtersTitle}>
        <span>Фильтр</span>
        <button className={styles.resetFilter} onClick={handleReset}>
          <FeatherIcon icon="rotate-ccw" />
          Сброс
        </button>
      </h3>

      {filters.map((filterGroup, index) => (
        <div className={styles.filterGroup} key={index}>
          <h4 className={styles.filterGroupTitle} onClick={() => toggleFilterGroup(index)}>
            {filterGroup.title}
            <span className={styles.toggleIcon}>
              {openFilterIndex === index ? <ChevronUp /> : <ChevronDown />} {/* Логика каретки */}
            </span>
          </h4>
          <div className={`${styles.filterContent} ${openFilterIndex === index ? styles.active : ''}`}>
            {filterGroup.type === 'range' ? (
              <div className={styles.priceRange}>
                <input type="number" className={styles.priceMin} placeholder="От" />
                <input type="number" className={styles.priceMax} placeholder="До" />
                <span className={styles.currency}>₽</span>
              </div>
            ) : (
              <div className={styles.filterOptions}>
                {filterGroup.options.map(option => (
                  <label key={option.value}>
                    <input
                      type="checkbox"
                      name={filterGroup.title.toLowerCase()}
                      value={option.value}
                      checked={selectedFilters[filterGroup.title]?.includes(option.value) || false}
                      onChange={() => handleCheckboxChange(filterGroup.title, option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
