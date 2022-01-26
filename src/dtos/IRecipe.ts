export interface IRecipe {
  id: string;
  name: string;
  preparationItems: string[];
  ingredients: string[];
  type: string;
  createdAt?: string | Date;
}
