import React from 'react';
import styles from './ContactInfo.module.scss';
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';

interface LocationData {
    address: string;
    parking: string;
    hours: string;
    email: string;
    phone: string;
}

interface ContactInfoProps {
    locationData: LocationData;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ locationData }) => {
    return (
        <div>
            <div className={styles.infoContainer}>
                <div className={styles.infoColumn}>
                    <h3 className={styles.sectionHeading}>
                        <FeatherIcon icon="map-pin" size={23} />
                        Адрес
                    </h3>
                    <p className={styles.infoParagraph}>{locationData.address}</p>
                    <p className={styles.parkingInfo}>{locationData.parking}</p>
                </div>
                <div className={styles.infoColumn}>
                    <h3 className={styles.sectionHeading}>
                        <FeatherIcon icon="clock" size={23} />
                        Режим работы
                    </h3>
                    <p className={styles.infoParagraph}>{locationData.hours}</p>
                </div>
                <div className={styles.infoColumn}>
                    <h3 className={styles.sectionHeading}>
                        <FeatherIcon icon="mail" size={23} />
                        Связаться с нами
                    </h3>
                    <p className={styles.infoParagraph}>{locationData.email}</p>
                </div>
            </div>

            <hr className={styles.line} />

            <div className={styles.phoneContainer}>
                <h3 className={styles.sectionHeading}>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    Контактные номера
                </h3>
                <div className={styles.phoneWrapper}>
                    <p className={styles.phoneNumber}>{locationData.phone}</p>
                    <div className={styles.iconContainer}>
                        <a href={`https://wa.me/${locationData.phone}`} rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className={styles.iconSize} />
                        </a>
                        <a href={`https://t.me/rafaelsalimov`} rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} className={styles.iconSize} />
                        </a>
                        <a href={`tel:${locationData.phone}`} rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPhone} className={styles.iconSize} />
                        </a>
                    </div>
                </div>
            </div>

            <hr className={styles.line} />

            <div className={styles.telegramContainer}>
                <span className={styles.telegramText}>
                    Следите за новыми поступлениями часов: 
                    <a href="https://t.me/sanywatches" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} className={styles.iconSize} /> t.me/sanywatches
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ContactInfo;
