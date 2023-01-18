import React from "react";
import { FooterProps } from "./Footer.props";
import { Paragraph } from "../../components";
import styles from "./Footer.module.css";
import cn from "classnames";

function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <Paragraph className={styles.paragraph}>
        Isinka © 2022 All rights reserved
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <a href="#">Terms</a>
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <a href="#">Privacy policy</a>
      </Paragraph>
    </footer>
  );
}

export default Footer;
