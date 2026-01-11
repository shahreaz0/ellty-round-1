import { Checkbox } from "../ui/checkbox/checkbox";
import styles from "./page-item.module.css";

export function PageItem({ page }: { page: string }) {
  return <Checkbox label={page} labelPosition="left" size="sm" className={styles.item} />;
}
