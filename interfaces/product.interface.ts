export interface ProductCharacteristic {
  value: string;
  name: string;
}

export interface ProductModel {
  requirements?: string[];
  tags: string[];
  title: string;
  subTitle: string;
  price: number;
  color: string;
  description: string;
  characteristics: ProductCharacteristic[];
  achievements: string[];
  rating: number;
  review: number;
	sale?: number;
}
