import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/service/hero.service';
import { MessageService } from 'src/app/service/message.service';
import { HEROES } from 'src/app/sock/sock-Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero;
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, 
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
}
