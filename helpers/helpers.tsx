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
  pageDocument: "page"
}