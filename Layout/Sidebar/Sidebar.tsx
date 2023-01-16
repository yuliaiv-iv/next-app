import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Menu from "../Menu/Menu";
import Logo from "../../assets/Icons/Logo";
import Link from "next/link";
import { Up } from "../../components";

function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <Menu />
      {/* <Up /> */}
    </aside>
  );
}

export default Sidebar;
