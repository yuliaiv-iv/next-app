import { ProductModel } from '../../interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CoursesProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  product: ProductModel
}
