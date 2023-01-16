import React, { useReducer, useEffect } from "react";
import { MainPageProps } from "./MainPage.props";
import styles from "./MainPage.module.css";
import { Sort, Tag, HeadingTag, Paragraph, Courses } from "../../components";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "../../components/Sort/sort.reducer";

function MainPage({ page }: MainPageProps): JSX.Element {
  const { title, seoText, products } = page;

  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <section className={styles.page}>
      <div className={styles.title}>
        <HeadingTag tag="h1">{title}</HeadingTag>
        <Tag color="grey">{products.length}</Tag>
        {sortedProducts.length === 0 ? null : <Sort sort={sort} setSort={setSort} />}
      </div>
      <Paragraph className={styles.seo}>{seoText}</Paragraph>
      <div>
        {sortedProducts.length === 0 ? (
          <HeadingTag tag="h2">Content is not available yet</HeadingTag>
        ) : (
          sortedProducts &&
          sortedProducts.map((product) => (
            <Courses layout key={product.title} product={product} />
          ))
        )}
      </div>
    </section>
  );
}

export default MainPage;
