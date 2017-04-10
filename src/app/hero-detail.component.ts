import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './services/hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: "./views/hero-detail-component.html"
})

constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
){}

//the hero property is a input property
export class HeroDetailComponent implements OnInit {
  //ngOnInit lifecycle hook
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  @Input()hero: Hero;
}
