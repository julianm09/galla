import styles from "./sliderinput.module.css";
import Slider from "@mui/material/Slider";

export default function SliderInput({
  label = "label",
  value = 10,
  onChange = () => {},
}: props) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.row}>
        <div className={styles.number}>{value}</div>
        <Slider value={value * 100} onChange={onChange}></Slider>
      </div>
    </div>
  );
}

type props = {
  label: string;
  value: number;
  onChange: any;
};
