import React, { useEffect, useState } from "react";
import styles from "./Up.module.css";
import ButtonUp from "../../assets/Icons/ButtonUp";

function Up(): JSX.Element {
  const [visibleBtn, setVisibleBtn] = useState(false);

  const handleShowScrollBtn = () => {
    if (window.scrollY > 250) {
      setVisibleBtn(true);
    } else {
      setVisibleBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollBtn);
    return () => window.removeEventListener("scroll", handleShowScrollBtn);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {visibleBtn && (
        <button className={styles.up} onClick={scrollToTop}>
          <ButtonUp />
        </button>
      )}
    </>
  );
}

export default Up;
