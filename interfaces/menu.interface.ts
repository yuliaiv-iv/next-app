import { TopLevelCategory } from "./page.interface";

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface Categories {
  secondCategory: string;
  pages: PageItem[];
  isOpen?: boolean;
}

export interface CategoriesModel {
  categories: Categories[];
}

export type MenuItem = Record<string, CategoriesModel>;

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}
