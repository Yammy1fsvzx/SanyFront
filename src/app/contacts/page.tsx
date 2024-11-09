'use client';

import styles from "./contacts.module.scss";

import Header from './components/Header/Header';
import CityNavigation from './components/CityNavigation/CityNavigation';
import Map from './components/Map/Map';
import ContactInfo from './components/ContactInfo/ContactInfo';
import FAQ from './components/InfoBlock/InfoBlock';
import Subscribe from '../components/homeBlocks/subscribe/subscribe';

import Link from 'next/link';

const locationData = {
  address: 'Рублево Успенское Шоссе, Жуковка 71',
  parking: 'Парковка доступна',
  hours: 'Пн-Пт: 10:00 - 20:00',
  email: 'sany@gmail.com',
  phone: '+7 965 333 8881',
};

const textExpData = [
  { title: "О магазине", content: "Sanywatches не является официальным дилером и не пытается им быть для любых марок часов, представленных на этом сайте." },
  { title: "Актуальное наличие", content: "Многие товары, представленные на сайте находятся на комиссии на руках у клиентов, поэтому перед тем, как приехать в офис и посмотреть вещь, обязательно согласуйте время вашего приезда, чтобы состыковать продавца и покупателя." },
];

export default function ContactPage() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>

        <div className={styles.breadcrumbs}>
          <span><Link href="/">SanyWatches</Link> <span className={styles.breadcrumbsDash}>/</span> Контакты</span>
        </div>
      
          <Header title="Контакты Москва" />

          <div className={styles.firstBox}>
            <CityNavigation />
            <Map />
            <ContactInfo locationData={locationData} />
          </div>

          <div className={styles.textExp}>
            <Header title="Важная информация" />
            <FAQ textExpData={textExpData}/>
          </div>

          {/* <div className={styles.subBlock}>
            <Subscribe />
          </div> */}
      </div>

    </div>
  )
}