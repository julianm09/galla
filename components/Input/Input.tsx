"use client";

import { Checkbox } from "@mui/material";
import styles from "./input.module.css";

export default function Input({
  label = "label",
  value = "",
  onChange = () => {},
  checkbox = false,
  handleCheckbox = () => {},
  checked = true,
}: props) {
  return (
    <div className={styles["input-container"]}>
      <div className={styles["row"]}>
        <label>{label}</label>
        {checkbox && (
          <Checkbox
          onChange={handleCheckbox}
          checked={checked}
            sx={{
              margin: '0 0 0 5px',
              padding: 0,
              "& .MuiSvgIcon-root": { fontSize: 18 },
              color: "#6D96FF",
              "&.Mui-checked": {
                color: "#6D96FF",
              },
            }}
          />
        )}
      </div>
      <input
        className={styles["input"]}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

type props = {
  label: string;
  value: string;
  onChange: any;
  checkbox: boolean;
  handleCheckbox: any;
  checked: boolean;
};
