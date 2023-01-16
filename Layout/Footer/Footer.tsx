import React from "react";
import { FooterProps } from "./Footer.props";
import { Paragraph } from "../../components";
import styles from "./Footer.module.css";
import cn from "classnames";

function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <Paragraph className={styles.paragraph}>
        OwlTop © 2020 - 2021 Все права защищены
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <a href="#">Пользовательское соглашение</a>
      </Paragraph>
      <Paragraph className={styles.paragraph}>
        <a href="#">Политика конфиденциальности</a>
      </Paragraph>
    </footer>
  );
}

export default Footer;
