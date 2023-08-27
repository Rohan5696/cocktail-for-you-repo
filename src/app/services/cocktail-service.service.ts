import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  private readonly baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  constructor(private http: HttpClient) { }

  getDrinkList(drinkName: string): Observable<any> {
    const url = `${this.baseUrl}/search.php?s=${drinkName}`;
    return this.http.get<any>(url);
  }
}
