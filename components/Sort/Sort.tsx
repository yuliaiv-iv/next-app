import React from "react";
import { SortProps, SortEnum } from "./Sort.props";
import styles from "./Sort.module.css";

import cn from "classnames";
import Sorting from "../../assets/Icons/Sorting";

function Sort({ sort, setSort, className, ...props }: SortProps): JSX.Element {
  return (
    <div className={cn(className, styles.sort)} {...props}>
      <div className={styles.sortName} id="sort">
        Sort
      </div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(className, styles.button, {
          [styles.active]: sort == SortEnum.Rating,
        })}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <Sorting />
        Rating
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn(className, styles.button, {
          [styles.active]: sort == SortEnum.Price,
        })}
        aria-selected={sort === SortEnum.Price}
        aria-labelledby="sort price"
      >
        <Sorting />
        Price
      </button>
    </div>
  );
}

export default Sort;
