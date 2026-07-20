import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class PromotionService {
  private readonly API_URL = environment.baseUrl;
  private http = inject(HttpClient);

  getAllPromotions() {
    return this.http
      .get<any[]>(`${this.API_URL}/Promocion`)
      .pipe(catchError(() => of([])));
  }
}
