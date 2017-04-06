import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: "./views/hero-detail-component.html"
})
//the hero property is a input property
export class HeroDetailComponent {
    @Input()hero: Hero;
}
