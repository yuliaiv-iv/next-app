import React, { useState } from "react";
import styles from "./UIKit.module.css";
import { HeadingTag, Tag, Rating, Button, Paragraph } from "../index";

function UIKit(): JSX.Element {
  const [rating, setRating] = useState(2);
  return (
    <div className={styles.kit}>
      <HeadingTag tag="h2">Application UI Kit</HeadingTag>
      <div className={styles.cards}>
        <div className={styles.card}>
          <HeadingTag tag="h3" className={styles.title}>
            Typography
          </HeadingTag>
          <HeadingTag tag="h1">Heading 1 - Noto Sans - 26px</HeadingTag>
          <HeadingTag tag="h2">Heading 2 - Noto Sans - 20px</HeadingTag>
          <HeadingTag tag="h3">Heading 3 - Noto Sans - 16px</HeadingTag>
          <Paragraph>Body Text Paragraph - Noto Sans - 16px</Paragraph>
        </div>
        <div className={styles.card}>
          <HeadingTag tag="h3" className={styles.title}>
            Colors
          </HeadingTag>
          <Paragraph>Primary Colors</Paragraph>
          <div className={styles.colors}>
            <div className={styles.primary}>#3B434E</div>
            <div className={styles.primary}>#6C7077</div>
            <div className={styles.primary}>#FFFFFF</div>
            <div className={styles.primary}>#347EFF</div>
          </div>
          <Paragraph>Secondary Colors</Paragraph>
          <div className={styles.colors}>
            <div className={styles.secondary}>#D6D6D6</div>
            <div className={styles.secondary}>#F2F5FA</div>
            <div className={styles.secondary}>#007B48</div>
            <div className={styles.secondary}>#C8F8E4</div>
          </div>
        </div>
        <div className={styles.card}>
          <HeadingTag tag="h3" className={styles.title}>
            Tags
          </HeadingTag>
          <Paragraph>Primary Tags</Paragraph>
          <Tag size="small" color="primary">
            Small
          </Tag>
          <Tag color="primary">Medium</Tag>
          <Tag size="small" color="green">
            Small
          </Tag>
          <Tag color="green">Medium</Tag>
          <Paragraph>Secondary Tags</Paragraph>
          <Tag size="small" color="secondary">
            Small
          </Tag>
          <Tag color="secondary">Medium</Tag>
          <Tag size="small" color="grey">
            Small
          </Tag>
          <Tag color="grey">Medium</Tag>
        </div>
        <div className={styles.card}>
          <HeadingTag tag="h3" className={styles.title}>
            Buttons
          </HeadingTag>
          <Paragraph>Primary Buttons</Paragraph>
          <Button appearance="primary" className={styles.button}>
            Button
          </Button>
          <Button appearance="primary" arrow="right" className={styles.button}>
            Button w/Arrow
          </Button>
          <Button
            appearance="primary"
            className={`${styles.button} ${styles.hoverP}`}
          >
            Hovered Button
          </Button>
          <Paragraph>Secondary Buttons</Paragraph>
          <Button appearance="secondary" className={styles.button}>
            Button
          </Button>
          <Button
            appearance="secondary"
            arrow="right"
            className={styles.button}
          >
            Button w/Arrow
          </Button>
          <Button
            appearance="secondary"
            className={`${styles.button} ${styles.hoverS}`}
          >
            Hovered Button
          </Button>
        </div>
        <div className={styles.card}>
          <HeadingTag tag="h3" className={styles.title}>
            Rating
          </HeadingTag>
          <div className={styles.rating}>
            <div className={styles.ratingItem}>
              <Paragraph>Fixed</Paragraph>
              <Rating rating={4} />
            </div>
            <div className={styles.ratingItem}>
              <Paragraph>Editable</Paragraph>
              <Rating rating={1} isEditable setRating={setRating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIKit;
