import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 10),
    new Ingredient('Hot sauce', 7),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addBulkIngredients(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
  }
}
