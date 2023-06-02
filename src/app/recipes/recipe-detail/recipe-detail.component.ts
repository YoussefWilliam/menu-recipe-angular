import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public recipeId: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.recipeId);
    });
  }

  handleAddingIngredients() {
    this.shoppingListService.addBulkIngredients(this.recipe.ingredients);
  }

  handleOnEditRecipeClick() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
