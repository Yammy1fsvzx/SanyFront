"use client";

import React from 'react';
import styles from './cartMenu.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ id: number; name: string; price: number; quantity: number }>; // Example item structure
};

const CartMenu: React.FC<Props> = ({ isOpen, onClose, items }) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div className={`${styles.cartMenu} ${isOpen ? styles.open : ''}`}>
        <h1 className={styles.cartMenuH}>Корзина</h1>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <div className={styles.cartContent}>
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemQuantity}>Количество: {item.quantity}</span>
                <span className={styles.itemPrice}>{item.price}₽</span>
              </div>
            ))
          ) : (
            <p className={styles.emptyMessage}>Ваша корзина пуста</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartMenu;