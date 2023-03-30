"use client";

import styles from "./input.module.css";

export default function Input({
  label = "label",
  value = "",
  onChange = () => {},
}: props) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input value={value} onChange={onChange}></input>
    </div>
  );
}

type props = {
  label: string;
  value: string;
  onChange: any;
};
