import { ProductModel } from "./product.interface";

export type TopLevelCategory = "courses" | "book" | "services";

export interface TopPageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface PageModel {
  title: string;
	seoText: string;
  products: ProductModel[];
}
