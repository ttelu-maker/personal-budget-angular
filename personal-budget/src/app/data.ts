import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface BudgetItem { title: string; budget: number; }

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getBudget$(): Observable<BudgetItem[]> {
    return this.http.get<BudgetItem[]>('assets/budget.json').pipe(
      // safety net: even if the file is missing, we still show a chart
      catchError(() => of([
        { title: 'Rent',        budget: 450 },
        { title: 'Groceries',   budget: 120 },
        { title: 'Utilities',   budget: 90 },
        { title: 'Transport',   budget: 100  },
        { title: 'Entertainment', budget: 180 },
        { title: 'Savings',     budget: 60 },
        { title: "Eat out",      budget: 30  }


]

    ))
    );
  }
}

