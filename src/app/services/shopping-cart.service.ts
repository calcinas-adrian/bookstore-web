import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private API_URL = `${environment.baseUrl}/Carrito`;

  private http = inject(HttpClient);

  getShoppingCartByUserId(id: number) {
    return this.http.get(`${this.API_URL}/details/${id}`);
  }

  changeStateShoppingCart(id: number) {
    return this.http.patch(`${this.API_URL}/changeState`, {
      carritoId: id,
    });
  }
}
