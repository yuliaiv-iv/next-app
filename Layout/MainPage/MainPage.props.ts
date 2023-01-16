import { MenuItem } from "../../interfaces/menu.interface";
import { PageModel } from "../../interfaces/page.interface";

export interface MainPageProps {
  page: PageModel;
  menu: MenuItem;
  firstCategory: string;
}