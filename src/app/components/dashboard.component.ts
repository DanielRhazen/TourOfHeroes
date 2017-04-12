import {Component, OnInit} from "@angular/core";

import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './views/dashboard-component.html',
    styleUrls: ['./styles/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = []; //definindo uma array de Hero vazia

    constructor(private heroService: HeroService){ }
    //promisse da heroService
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,8)); //promisse 
    }



}