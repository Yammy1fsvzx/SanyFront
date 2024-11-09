'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './InfoBlock.module.scss';
import Header from '../Header/Header';
import FeatherIcon from 'feather-icons-react';

interface TextExpansionItemProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TextExpansionItem: React.FC<TextExpansionItemProps> = ({ title, content, isExpanded, onToggle }) => {
  return (
    <motion.div className={styles.textExpansionItem}>
      <motion.button
        className={`${styles.vExpansionPanelHeader} ${isExpanded ? styles.active : ''}`}
        type="button"
        onClick={onToggle}
      >
        {title}
        <motion.div
          className={styles.vExpansionPanelHeader__icon}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <FeatherIcon icon='chevron-down' size={20} />
        </motion.div>
      </motion.button>
      <motion.div
        className={styles.textContentContainer}
        layout
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <div className={styles.textContent}>
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
};

interface TextExpansionProps {
  textExpData: Array<{ title: string; content: string }>;
}

const FAQ: React.FC<TextExpansionProps> = ({ textExpData }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.textExpansion}>
      {textExpData.map((item, index) => (
        <TextExpansionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;