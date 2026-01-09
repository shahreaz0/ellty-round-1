import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import styles from "./checkbox.module.css";

const checkboxVariants = cva(styles.box, {
  variants: {
    variant: {
      default: styles.default,
      blue: styles.blue,
      darkBlue: styles.darkBlue,
      lightGray: styles.lightGray,
      mediumGray: styles.mediumGray,
    },
    focused: {
      true: styles.focused,
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    focused: false,
  },
});

function Checkbox({
  className,
  variant,
  focused,
  label,
  ref,
  ...props
}: ComponentProps<"input"> &
  VariantProps<typeof checkboxVariants> & {
    label?: string;
  }) {
  return (
    <label className={styles.base}>
      <input type="checkbox" className={styles.input} ref={ref} {...props} />
      <div className={checkboxVariants({ variant, focused, className })}>
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
