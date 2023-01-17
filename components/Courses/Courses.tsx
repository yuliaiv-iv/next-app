import React, { ForwardedRef, forwardRef, useState } from "react";
import { CoursesProps } from "./Courses.props";
import styles from "./Courses.module.css";
import { motion } from "framer-motion";

import cn from "classnames";
import HeadingTag from "../HeadingTag/HeadingTag";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Check from "../../assets/Icons/Check";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import {
  firstLetter,
  calculateDiscount,
  wordEnding,
} from "../../helpers/helpers";

const Courses = motion(
  forwardRef(
    (
      { product, className, ...props }: CoursesProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const {
        color,
        tags,
        title,
        subTitle,
        price,
        description,
        characteristics,
        achievements,
        rating,
        review,
        sale,
      } = product;

      const [isOpen, setIsOpen] = useState<boolean>(false);

      function handleDescriptionOpen() {
        setIsOpen(!isOpen);
      }

      return (
        <section className={styles.product} ref={ref} {...props}>
          <div className={styles.logo} style={{ background: color }}>
            {firstLetter(title)}
          </div>
          <HeadingTag tag="h2" className={styles.title}>
            {title}
          </HeadingTag>
          <div className={styles.price}>
            <span>
              <span className="visuallyHidden">Price</span>
              {`$ ${price.toFixed(2)}`}
            </span>
            <Tag color="green" size="small" className={styles.sale}>
              <span className="visuallyHidden">Sale</span>
              {sale && calculateDiscount(price, sale)}
            </Tag>
          </div>
          <div className={styles.rate}>
            <span className="visuallyHidden">{"Rating" + rating}</span>
            <Rating rating={rating} />
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag color="primary" size="small" key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
          <div className={styles.priceTitle} aria-hidden={true}>
            Price
          </div>
          <div className={styles.rateTitle}>{wordEnding(review)}</div>
          <hr className={styles.hr} />
          <Paragraph className={styles.subTitle}>{subTitle}</Paragraph>
          <div className={styles.characteristics}>
            {characteristics.map(({ name, value }) => (
              <div className={styles.characteristic} key={name}>
                <HeadingTag tag="h3" className={styles.characteristicName}>
                  {name}
                </HeadingTag>
                <span className={styles.characteristicDots}></span>
                <Paragraph className={styles.characteristicValue}>
                  {name === "Duration" ? `${value} hours` : value}
                </Paragraph>
              </div>
            ))}
          </div>
          <ul className={styles.achievements}>
            <HeadingTag tag="h3">Achievements</HeadingTag>
            {achievements.map((achievement) => (
              <li key={achievement} className={styles.achievement}>
                <Tag
                  size="small"
                  color="green"
                  className={styles.achievementTag}
                >
                  <Check />
                </Tag>
                <Paragraph>{achievement}</Paragraph>
              </li>
            ))}
          </ul>
          <hr className={cn(styles.hr, styles.hr2)} />
          <div className={styles.description}>
            <HeadingTag tag="h2">Description</HeadingTag>
            <Paragraph
              className={cn(styles.descriptionText, {
                [styles.descriptionTextOpen]: isOpen,
              })}
            >
              {description}
            </Paragraph>
          </div>
          <div className={styles.buttons}>
            <Button
              appearance="primary"
              className={cn(className, styles.button)}
              onClick={handleDescriptionOpen}
              arrow={isOpen ? "up" : "down"}
            >
              Show More
            </Button>
            <a href="https://nextjs.org/" target="_blank">
              <Button
                appearance="secondary"
                className={cn(className, styles.button)}
                arrow="right"
              >
                Learn More
              </Button>
            </a>
          </div>
        </section>
      );
    }
  )
);

export default Courses;
