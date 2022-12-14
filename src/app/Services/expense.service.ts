import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { Expense } from '../Models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
private getUrl :  String ="http://localhost:8080/api/v1/expenses";
  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response => response)
    )
  }


  
}
  