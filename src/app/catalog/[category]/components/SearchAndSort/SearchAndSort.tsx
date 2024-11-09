"use client";

import React, { useState, useEffect } from 'react';
import styles from './SearchAndSort.module.scss';
import FeatherIcon from 'feather-icons-react';

interface SearchAndSortProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
}

const SearchAndSort: React.FC<SearchAndSortProps> = ({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
}) => {
  const [isSortOpen, setSortOpen] = useState(false);
  const [isSortSelected, setSortSelected] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const toggleSortDropdown = () => {
    setSortOpen(prev => !prev);
  };

  const handleSortSelect = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    setSortSelected(true);
    setSortOpen(false);
  };

  const handleMouseEnter = () => {
    setSortOpen(true);
  };

  const handleMouseLeave = () => {
    setSortOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${styles.sortContainer}`)) {
      setSortOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchSort}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.referenceInput}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        {(searchTerm === '' && !isInputFocused) && (
          <div
            className={styles.inputPlaceholder}
            onClick={() => {
              const input = document.querySelector(`.${styles.referenceInput}`) as HTMLInputElement;
              input?.focus();
            }}
          >
            <FeatherIcon icon="search" />
            Поиск в каталоге
          </div>
        )}
        {searchTerm && (
          <div className={styles.clearButton} onClick={() => setSearchTerm('')}>
            <FeatherIcon icon="x" />
          </div>
        )}
      </div>

      <div
        className={styles.sortContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.selected} onClick={toggleSortDropdown}>
          <div className={styles.sortIcon}>
            <FeatherIcon icon="align-left" />
          </div>
          {isSortSelected ? (
            sortOrder === 'asc' ? 'По возрастанию цены' : 'По убыванию цены'
          ) : (
            sortOrder === 'asc' ? 'По возрастанию цены' : 'По убыванию цены'
          )}
          <div className={`${styles.caret} ${isSortOpen ? styles.open : ''}`}>
            <FeatherIcon icon="chevron-down" />
          </div>
        </div>
        <div className={`${styles.dropdown} ${isSortOpen ? styles.open : ''}`}>
          <div
            className={styles.dropdownItem}
            onClick={() => handleSortSelect('asc')}
          >
            По возрастанию цены
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => handleSortSelect('desc')}
          >
            По убыванию цены
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;