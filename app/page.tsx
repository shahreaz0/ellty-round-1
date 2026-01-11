import { PageSelectionCard } from "@/components/page-selection-card/page-selection-card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageSelectionCard />
    </main>
  );
}
