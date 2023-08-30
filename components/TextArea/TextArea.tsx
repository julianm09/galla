"use client";

import Button from "../Button/Button";
import styles from "./textarea.module.css";

export default function TextArea({
  label = "label",
  value = "",
  onChange = () => {},
  regenerateText,
}: props) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <textarea value={value} onChange={onChange}></textarea>
      {regenerateText && <Button label="Regenerate" onClick={regenerateText} secondary={false}/>}
    </div>
  );
}

type props = {
  label: string;
  value: string;
  onChange: any;
  regenerateText: any;
};
