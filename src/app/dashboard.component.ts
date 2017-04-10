import {Component, OnInit} from "@angular/core";

import { HeroService } from './services/hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './views/dashboard-component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = []; //definindo uma array de Hero vazia

    constructor(private heroService: HeroService){ }
    //promisse da heroService
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5)); //promisse 
    }



}