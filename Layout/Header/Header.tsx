import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../../assets/Icons/Logo";
import Menu from "../../assets/Icons/Menu";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import CloseBtn from "../../assets/Icons/CloseBtn";
import { useRouter } from "next/router";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

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
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
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