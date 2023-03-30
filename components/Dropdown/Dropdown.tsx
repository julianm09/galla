"use client";

import { useState } from "react";
import styles from "./dropdown.module.css";

export default function Dropdown({
  label = "label",
  value = "",
  setType,
  type,
  options,
}: {
  label: string;
  value: string;
  type: string;
  setType: any;
  options: any;
}) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectOption = (option: string) => {
    setSelectedOption(option);
    setType(option)
    setOpen(false);
  };

  return (
    <div className={styles.dropdown} onClick={() => setOpen(!open)}>
      <label>{label}</label>
      <div className={styles.input}>{type}</div>

      {open && (
        <div className={styles.menu}>
          {options &&
            options.map((x: string, i: any) => {
              return (
                <div
                  key={i}
                  className={styles.option}
                  onClick={() => selectOption(x)}
                >
                  {x}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
