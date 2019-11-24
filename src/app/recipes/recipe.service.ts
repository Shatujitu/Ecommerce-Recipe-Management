import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe ('Burger', 'Beef Burger with Cheese', '../assets/burger.jpg',[new Ingredient('Meat', 1), new Ingredient('Bread', 2), new Ingredient('Tomato', 1)]),
        new Recipe ('Pizza', 'Juicy Hot Pizza with Chicken', '../assets/pizza.jpg', [new Ingredient('Chicken', 1), new Ingredient('Salad', 1)])
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}