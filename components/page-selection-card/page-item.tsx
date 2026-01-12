import { Checkbox } from "../ui/checkbox/checkbox";
import styles from "./page-item.module.css";

export function PageItem({
  page,
  checked,
  onChange,
}: {
  page: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <Checkbox
      label={page}
      labelPosition="left"
      size="sm"
      className={styles.item}
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
    />
  );
}
