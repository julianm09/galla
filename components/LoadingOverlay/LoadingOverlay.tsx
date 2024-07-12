"use client";

import { CircularProgress } from "@mui/material";
import styles from "./loadingoverlay.module.css";

export default function LoadingOverlay({}) {
  return (
    <div className={styles["overlay-container"]}>
      <div className={styles["text"]}>Loading</div>
      <CircularProgress size={24} />
    </div>
  );
}
