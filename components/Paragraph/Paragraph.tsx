import React from "react";
import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

import cn from "classnames";

function Paragraph({
  size = "medium",
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element {
  return (
    <p
      className={cn(className, styles.paragraph, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;
