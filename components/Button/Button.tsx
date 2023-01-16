import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

import cn from "classnames";
import Arrow from "../../assets/Icons/Arrow";

function Button({
  children,
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
            [styles.up]: arrow === "up",
          })}
        >
          <Arrow 
            className={appearance === "secondary" ? styles.svg : ""}
          />
        </span>
      )}
    </button>
  );
}

export default Button;
