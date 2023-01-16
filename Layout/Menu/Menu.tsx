import React, { useContext, useState } from "react";
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
  const currentMenu: Categories[] = menu && menu[firstCategory]?.categories;
  const [menuState, setMenuState] = useState(currentMenu);

  const variants = {
    visible: {
      transition: {
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
    hidden: { opacity: 0, height: 0 },
  };

  const setMenu = (newMenu: Categories[]) => {
    setMenuState(newMenu);
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu[firstCategory].categories.map((item) => {
          if (item.secondCategory == secondCategory) {
            item.isOpen = !item.isOpen;
          }
          return item;
        })
      );
  };

  const buildMenu = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.name}>
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
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevelMenu = (menuBlock: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
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
                <div key={secondCategory}>
                  <div
                    className={styles.secondLevel}
                    onClick={() => openSecondLevel(secondCategory)}
                  >
                    {secondCategory}
                  </div>
                  <motion.div
                    layout
                    variants={variants}
                    initial={isOpen ? "visible" : "hidden"}
                    animate={isOpen ? "visible" : "hidden"}
                    // className={cn(styles.secondLevelBlock, {
                    //   [styles.secondLevelBlockOpened]: isOpen,
                    // })}
                    className={cn(styles.secondLevelBlock)}
                  >
                    {buildThirdLevelMenu(pages, menuBlock.route)}
                  </motion.div>
                </div>
              );
            }
          )}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <motion.div key={page._id} variants={variantsChildren}>
        <Link
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${page.alias}` === router.asPath,
          })}
        >
          {page.category}
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildMenu()}</div>;
}

export default Menu;
