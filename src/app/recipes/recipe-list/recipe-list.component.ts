import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipe: Array<Recipe> = [];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes();
  }

  handleOnNewRecipeClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
