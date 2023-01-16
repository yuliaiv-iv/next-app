import React from "react";
import { SortProps, SortEnum } from "./Sort.props";
import styles from "./Sort.module.css";

import cn from "classnames";
import Sorting from "../../assets/Icons/Sorting";

function Sort({ sort, setSort, className, ...props }: SortProps): JSX.Element {
  return (
    <div className={cn(className, styles.sort)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(className, styles.button, {
          [styles.active]: sort == SortEnum.Rating,
        })}
      >
        <Sorting />
        Rating
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn(className, styles.button, {
          [styles.active]: sort == SortEnum.Price,
        })}
      >
        <Sorting />
        Price
      </span>
    </div>
  );
}

export default Sort;
