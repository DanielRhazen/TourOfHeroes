import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './views/heroes-component.html',
  styleUrls: ['./styles/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router){ }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

   ngOnInit(): void {
     this.getHeroes();
   }

   gotoDetail(){
     this.router.navigate(['/detail', this.selectedHero.id]);
   }

}