import Services from "../assets/Icons/Services";
import Books from "../assets/Icons/Books";
import Courses from "../assets/Icons/Courses";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <Courses />,
    id: "courses",
  },
  {
    route: "book",
    name: "Books",
    icon: <Books />,
    id: "book",
  },
  {
    route: "services",
    name: "Services",
    icon: <Services />,
    id: "services",
  },
];

export const firebaseDocs = {
  mainCollection: "isinkaData",
  pageCollection: "pageData",
  pageDocument: "page",
};

export function firstLetter(str: string) {
  return str.slice(0, 1);
}

export function wordEnding(num: number): string {
  if (num === 1) {
    return `${num} Review`;
  } else if (num === 0) {
    return "No Reviews";
  } else {
    return `${num} Reviews`;
  }
}
export function calculateDiscount(price: number, sale: number) {
  return `- $ ${((price * sale) / 100).toFixed(2)}`;
}

export function capitalized(word: string) {
  return word?.charAt(0).toUpperCase() + word?.slice(1);
}
