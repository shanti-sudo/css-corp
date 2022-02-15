export type RatingType = {
  rate: number;
  count: number;
};

export type ProductCategory =
  | "men's clothing"
  | 'jewelry'
  | 'electronics'
  | "women's clothing";

export type ProductResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: RatingType;
};
