"use client";

import styles from "../../styles/pages/home/sectionQmSms/SectionQmSms.module.scss";
import { SectionQmSmsData } from "../../config/pages/Home/sectionQmSms";
import { IconsQmSms } from "../../Icons/Icons";


export default function SectionQuemSomos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            {SectionQmSmsData.title} <IconsQmSms.User/> </h2>

          <p className={styles.description}>
            {SectionQmSmsData.description}
          </p>

          <div className={styles.socials}>
            {SectionQmSmsData.socials?.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}