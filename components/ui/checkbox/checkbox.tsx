import type { ComponentProps } from "react";
import styles from "./checkbox.module.css";

function Checkbox({
  className,
  label,
  labelPosition = "right",
  size = "md",
  ref,
  ...props
}: Omit<ComponentProps<"input">, "size"> & {
  label?: string;
  labelPosition?: "left" | "right";
  size?: "sm" | "md";
}) {
  const baseClasses = [
    styles.base,
    labelPosition === "left" ? styles.labelLeft : "",
    props.disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const boxClasses = [styles.box, size === "sm" ? styles.sizeSm : styles.sizeMd]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={baseClasses}>
      <input type="checkbox" className={styles.input} ref={ref} {...props} />
      <div className={boxClasses}>
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.checkmark}
        >
          <title>Checked</title>
          <path
            d="M0.5 7.1L6.53451 12.4672C6.55497 12.4854 6.58626 12.4837 6.6047 12.4635L17.5 0.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

export { Checkbox };
