import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './views/heroes-component.html',
  styleUrls: ['./views/style.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService){ }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

   ngOnInit(): void {
     this.getHeroes();
   }

}
