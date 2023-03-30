import styles from "./button.module.css";

export default function Button({
  label = "label",
  onClick = () => {},
}: {
  label: string;
  onClick: any;
}) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
