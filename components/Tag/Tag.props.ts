import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "red" | "grey" | "green";
  href?: string;
}
