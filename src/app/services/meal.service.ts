import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

 

  constructor(private http: HttpClient) {}

 

  getSomeMeal(): Observable<any> {
    return this.http.get<any>(this.apiUrl);

  }
}
