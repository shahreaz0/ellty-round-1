import type { ComponentProps } from "react";
import styles from "./button.module.css";

function Button({ className, ...props }: ComponentProps<"button">) {
  return (
    <button data-slot="button" className={`${styles.base} ${className ?? ""}`} {...props}>
      {props.children}
    </button>
  );
}

export { Button };
