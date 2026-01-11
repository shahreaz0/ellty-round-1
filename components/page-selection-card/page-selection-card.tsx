import { Button } from "../ui/button/button";
import { PageItem } from "./page-item";
import styles from "./page-selection-card.module.css";

export function PageSelectionCard() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        <PageItem page="All pages" />
        <div className={styles.divider} />
        {pages.map((page) => (
          <PageItem key={page} page={page} />
        ))}
        <div className={styles.divider} />
      </div>
      <div className={styles.footer}>
        <Button>Done</Button>
      </div>
    </section>
  );
}
