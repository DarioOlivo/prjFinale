import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  //private apiUrl = 'http://localhost:5082/api/Meal?request='

 

  constructor(private http: HttpClient) {}

 /**postMeal(choice: string): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl+choice,{});
  } */

  

  private apiUrl = 'http://localhost:5082/api/Meal';

  
  postMeal(request: string):  Observable<Meal>{
    return this.http.post<Meal>(`${this.apiUrl}?request=${request}`,{});
  }
}
