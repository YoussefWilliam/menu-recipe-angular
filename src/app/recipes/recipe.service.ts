import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipe: Array<Recipe> = [
    new Recipe(
      1,
      'My first recipe',
      "Don't mind the description",
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new Ingredient('Almonds', 10), new Ingredient('Fish', 12)]
    ),
    new Recipe(
      2,
      'Second recipe',
      'I love pizza',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new Ingredient('Oranges', 50), new Ingredient('Chips', 7)]
    ),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipe;
  }

  getRecipeById(id: number) {
    return this.recipe.find((item) => item.id === id);
  }
}
