import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
//import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = null ; //of(HEROES);
    //this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    //const hero = HEROES.find(h => h.id === id)!;
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return null ; //of(hero);
  }

}
