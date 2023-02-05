import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../../assets/Icons/Logo";
import Menu from "../../assets/Icons/Menu";
import { motion, useReducedMotion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import CloseBtn from "../../assets/Icons/CloseBtn";
import { useRouter } from "next/router";
import Link from "next/link";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Link href="/">
        <Logo className={styles.logo} aria-label="Site Logo and name Isinka" />
      </Link>
      <button className={styles.button}>
        <Menu onClick={() => setIsOpened(true)} />
      </button>
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar className={styles.sidebar} />
        <button className={`${styles.button} ${styles.close}`}>
          <CloseBtn onClick={() => setIsOpened(false)} />
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
