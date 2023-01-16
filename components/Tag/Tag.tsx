import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

import cn from "classnames";

function Tag({
  children,
  size = "medium",
  color = "secondary",
  href,
  className,
  ...props
}: TagProps): JSX.Element {
  return (
    <div
      className={cn(className, styles.tag, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.secondary]: color === "secondary",
        [styles.primary]: color === "primary",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}

export default Tag;
