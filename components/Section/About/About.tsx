import Image from "next/image";
import React, { useState } from "react";
import { Repeat } from "react-feather";
import styles from "./about.module.css";

type props = {
  section: any;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
  sectionName: string;
};

export default function About({
  section,
  loading,
  setLoading,
  sectionName,
}: props) {
  return (
    <div className={`${styles["section"]} ${styles[sectionName]}`}>
      <div className={styles["column"]}>
        <h2>{section.headline}</h2>
        <p>{section.text}</p>
        <button>Learn More</button>
      </div>
      <div className={styles["image-container"]}>
        <Image
          src={section.image.regular}
          fill
          alt={section.headline}
          onLoad={() => setLoading(false)}
          className={styles.image}
        />
      </div>
    </div>
  );
}
