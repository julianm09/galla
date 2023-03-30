import Image from "next/image";
import React, { useState } from "react";
import { Repeat } from "react-feather";
import styles from "./hero.module.css";

type props = {
  section: any;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
  sectionName: string;
};

export default function Hero({
  section,
  loading,
  setLoading,
  sectionName,
}: props) {
  const [loadFull, setLoadFull] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setLoadFull(true);
  };

  return (
    <div className={`${styles["section"]} ${styles[sectionName]}`}>
      <div className={styles["column"]}>
        <h1>{section.headline}</h1>
        <p>{section.text}</p>
        <button>Contact Us</button>
      </div>
      <div className={styles["image-container"]}>
        {loadFull ? (
          <Image
            src={section.image.full}
            fill
            alt={section.headline}
            className={styles.image}
          />
        ) : (
          <Image
            src={section.image.regular}
            fill
            alt={section.headline}
            onLoad={() => handleLoad()}
            className={styles.image}
          />
        )}
      </div>
    </div>
  );
}
