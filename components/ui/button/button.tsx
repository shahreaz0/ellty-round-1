import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import styles from "./button.module.css";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.primary,
      secondary: styles.secondary,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Button({
  className,
  variant = "default",
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      data-variant={variant}
      className={buttonVariants({ variant, className })}
      {...props}
    >
      {props.children}
    </button>
  );
}

export { Button, buttonVariants };
