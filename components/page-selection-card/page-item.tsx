import { Checkbox } from "../ui/checkbox/checkbox";
import styles from "./page-item.module.css";

export function PageItem({ page }: { page: string }) {
  return (
    <div className={styles.item}>
      <span className="text">{page}</span>
      <Checkbox />
    </div>
  );
}
