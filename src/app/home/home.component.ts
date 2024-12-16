import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../services/meal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  myMeal: Meal;
  mealInput: any;

  constructor(private mealService : MealService){
    this.myMeal = new Meal();
  }
 
  searchMeal(){
    this.mealService.postMeal(this.mealInput).subscribe((data) =>{
      this.myMeal = data
    })
  }

  
  
}
