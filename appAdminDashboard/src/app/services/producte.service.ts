import { Injectable } from '@angular/core';
import { PRODUCTS } from '../rock/rock-product';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProducteService {

  constructor() {

  }

  /*
  Metodo que permite listar los productos
  */
  listProducts() : Observable<Product[]> {
    const products = of(PRODUCTS);
    return products
  }

  /**
   * Metodo que permite obtener un producto por Id
   * Param ID
   */
  getProductById(idProduct: number) :Observable<Product> {
    const product = PRODUCTS.find( p => p.id === idProduct);
    return of(product);
  }

  /**getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
     */
}
