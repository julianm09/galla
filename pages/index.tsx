import Builder from "@/components/Builder/Builder";
import Controls from "@/components/Controls/Controls";
import Panel from "@/components/Panel/Panel";
import styles from '@/styles/Home.module.css'

export default function Home() {

  return (
    <main className={`${styles.main}`}>
      {/* <Panel /> */}
      <Builder />
    </main>
  );
}
