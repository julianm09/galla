import styles from "./button.module.css";

export default function Button({
  label = "label",
  onClick = () => {},
  secondary = false
}: {
  label: string;
  onClick: any;
  secondary: boolean;
}) {
  return (
    <button className={`${styles.button} ${secondary && styles.secondary}`} onClick={onClick}>
      {label}
    </button>
  );
}
