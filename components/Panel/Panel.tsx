import Input from "../Input/Input";
import styles from "./panel.module.css";

export default function Panel() {
  return <div className={styles.panel}>
    <Input label="project" value="" onChange={() => {}}/>
  </div>;
}
