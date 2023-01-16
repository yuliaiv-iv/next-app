import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { IMenuContext, MenuContextProvider } from "../context/MenuContext";
import { Up } from "../components";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
      {/* <Up /> */}
    </div>
  );
}

  export const withLayout = <Props extends IMenuContext>(
  Component: FunctionComponent<Props>
) => {
  return function withLayoutComponent(props: Props): JSX.Element {
    return (
      <MenuContextProvider
        menu={props.menu}
        firstCategory={props.firstCategory}
      >
        <Layout>
          <Component {...props} />
        </Layout>
      </MenuContextProvider>
    );
  };
};
