import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: "./views/app-component.html",
  //CSS da pagina//
  styleUrls: ['./views/style.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
