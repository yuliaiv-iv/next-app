import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MenuItem } from "../../interfaces/menu.interface";
import { PageModel } from "../../interfaces/page.interface";

export interface MainPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  page: PageModel;
  menu: MenuItem;
  firstCategory: string;
}
