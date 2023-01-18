import { createContext, ReactNode } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IMenuContext {
  menu: MenuItem;
  firstCategory: TopLevelCategory;
}

export const MenuContext = createContext<IMenuContext>({
  menu: {},
  firstCategory: "courses",
});

export const MenuContextProvider = ({
  menu,
  firstCategory,
  children,
}: IMenuContext & { children: ReactNode }) => {
  return (
    <MenuContext.Provider value={{ menu, firstCategory }}>
      {children}
    </MenuContext.Provider>
  );
};
