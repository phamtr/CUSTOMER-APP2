export type ClassifyProduct = 'food' | 'beverage' | 'vegetable';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  currency?: string;
  classifys?: ClassifyProduct[];
  picture?: string;
}

export interface ProductFilter {
  classify?: ClassifyProduct;
}
