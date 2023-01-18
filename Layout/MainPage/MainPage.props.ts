import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PageModel } from "../../interfaces/page.interface";

export interface MainPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  page: PageModel;
}
