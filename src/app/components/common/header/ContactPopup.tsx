'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import FeatherIcon from 'feather-icons-react';
import { useForm } from 'react-hook-form';
import styles from './ContactPopup.module.scss';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactNumbers = [
  {
    city: 'Дубай',
    phone: '+971 04 123 456',
    telegram: 'https://t.me/yourtelegram',
    whatsapp: 'https://wa.me/yourwhatsapp',
    instagram: 'https://instagram.com/yourinstagram'
  },
  {
    city: 'Москва',
    phone: '+7 965 333 8881',
    telegram: 'https://t.me/yourtelegram',
    whatsapp: 'https://wa.me/yourwhatsapp',
    instagram: 'https://instagram.com/yourinstagram'
  }
];

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, watch } = useForm();
  const [contactMethod, setContactMethod] = useState('phone');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data: any) => {
    console.log(data);
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleContactMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContactMethod(e.target.value);
  };

  // Закрыть модалку при клике на overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className={styles.popupOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className={styles.popup}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close contact form"
        >
          <FeatherIcon icon="x" />
        </button>

        <div className={styles.content}>
          <h2 className={styles.title}>Связаться</h2>
          <div className={styles.phoneList}>
            <div className={styles.quickActionsContainer}>
              {contactNumbers.map((contact, index) => (
                <div key={index} className={styles.quickActions}>
                  <div className={styles.quickActionsDubai}>
                    <h3 className={styles.cityTitle}>{contact.city}</h3>
                    <a href={`tel:${contact.phone}`} className={styles.phoneLink}>
                      {contact.phone}
                    </a>
                    <div className={styles.socialLinks}>
                      {contact.telegram && (
                        <a href={contact.telegram} className={styles.socialButton}>
                          <FaTelegram size={24} />
                        </a>
                      )}
                      {contact.whatsapp && (
                        <a href={contact.whatsapp} className={styles.socialButton}>
                          <FaWhatsapp size={24} />
                        </a>
                      )}
                      {contact.instagram && (
                        <a href={contact.instagram} className={styles.socialButton}>
                          <FaInstagram size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Если форма отправлена, показываем сообщение вместо формы */}
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <FeatherIcon icon="check-circle" size={48} className={styles.successIcon} />
                <p>Спасибо, что отправили запрос! Наш менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.callbackForm}>
                <label htmlFor="name" className={styles.formLabel}>Имя</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: true })}
                  className={styles.formInput}
                  placeholder="Введите ваше имя"
                />

                <label htmlFor="contactMethod" className={styles.formLabel}>Способ связи</label>
                <select
                  id="contactMethod"
                  {...register('contactMethod', { required: true })}
                  className={styles.formInput}
                  onChange={handleContactMethodChange}
                  value={contactMethod}
                >
                  <option value="phone">Телефон</option>
                  <option value="email">Email</option>
                </select>

                {contactMethod === 'phone' ? (
                  <>
                    <label htmlFor="phone" className={styles.formLabel}>Номер телефона</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: contactMethod === 'phone' })}
                      className={styles.formInput}
                      placeholder="Введите номер телефона"
                    />
                  </>
                ) : (
                  <>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { required: contactMethod === 'email' })}
                      className={styles.formInput}
                      placeholder="Введите ваш email"
                    />
                  </>
                )}

                <div className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    {...register('privacyPolicy', { required: true })}
                  />
                  <label htmlFor="privacyPolicy">
                    Я прочитал Privacy Policy и согласен с условиями безопасности и обработки персональных данных
                  </label>
                </div>
                <button type="submit" className={styles.submitButton}>Отправить запрос</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPopup;