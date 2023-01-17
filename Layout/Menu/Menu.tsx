import React, { useContext, useState, KeyboardEvent } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { MenuContext } from "../../context/MenuContext";
import {
  Categories,
  FirstLevelMenuItem,
  PageItem,
} from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion, useReducedMotion } from "framer-motion";

function Menu(): JSX.Element {
  const { menu, firstCategory } = useContext(MenuContext);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const currentMenu: Categories[] = menu && menu[firstCategory]?.categories;
  const [menuState, setMenuState] = useState(currentMenu);
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>(
    undefined
  );

  const variants = {
    visible: {
      transition: shouldReduceMotion
        ? {}
        : {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: "auto",
    },
    hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 },
  };

  const setMenu = (newMenu: Categories[]) => {
    setMenuState(newMenu);
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu[firstCategory].categories.map((item) => {
          if (item.secondCategory === secondCategory) {
            setAnnounce(item.isOpen ? "closed" : "opened");
            item.isOpen = !item.isOpen;
          }
          return item;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === "Space" || key.code === "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildMenu = () => {
    return (
      <ul>
        {firstLevelMenu.map((menuItem) => (
          <li aria-expanded={menuItem.id === firstCategory} key={menuItem.name}>
            <Link href={`/${menuItem.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menuItem.id === firstCategory,
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </Link>
            {menuItem.id === firstCategory && buildSecondLevelMenu(menuItem)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelMenu = (menuBlock: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {Object.keys(menu).length !== 0 &&
          menu[menuBlock.id]?.categories?.map(
            ({ secondCategory, pages, isOpen }: Categories) => {
              const isSame = pages.some((page) =>
                page.alias.includes(router.asPath.split("/")[2])
              );
              if (isSame) {
                isOpen = true;
              }
              return (
                <li key={secondCategory}>
                  <button
                    className={styles.secondLevel}
                    onClick={() => openSecondLevel(secondCategory)}
                    onKeyDown={(key: KeyboardEvent) =>
                      openSecondLevelKey(key, secondCategory)
                    }
                    aria-expanded={isOpen}
                  >
                    {secondCategory}
                  </button>
                  <motion.ul
                    layout
                    variants={variants}
                    initial={isOpen ? "visible" : "hidden"}
                    animate={isOpen ? "visible" : "hidden"}
                    className={cn(styles.secondLevelBlock)}
                  >
                    {buildThirdLevelMenu(
                      pages,
                      menuBlock.route,
                      isOpen ?? false
                    )}
                  </motion.ul>
                </li>
              );
            }
          )}
      </ul>
    );
  };

  const buildThirdLevelMenu = (
    pages: PageItem[],
    route: string,
    isOpen: boolean
  ) => {
    return pages.map((page) => (
      <motion.li key={page._id} variants={variantsChildren}>
        <Link
          aria-current={
            `/${route}/${page.alias}` === router.asPath ? "page" : false
          }
          tabIndex={isOpen ? 0 : -1}
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${page.alias}` === router.asPath,
          })}
        >
          {page.category}
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <span role="log" className="visuallyHidden">
          {announce === "opened" ? "block is opened" : "block is closed"}
        </span>
      )}
      {buildMenu()}
    </nav>
  );
}

export default Menu;
