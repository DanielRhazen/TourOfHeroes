import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: "./views/hero-detail-component.html"
})


export class HeroDetailComponent implements OnInit {
  //the hero property is a input property
  @Input()hero: Hero;

  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}
  //ngOnInit lifecycle hook
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
