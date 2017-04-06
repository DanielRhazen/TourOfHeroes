import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 999, name: 'Eduardo Costa' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
