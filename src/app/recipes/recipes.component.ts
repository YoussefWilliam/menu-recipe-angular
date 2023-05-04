import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe = null;
  onChoosingRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
