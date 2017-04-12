import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; 

import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { AppComponent }  from './components/app.component';
import { HeroesComponent } from './components/heroes.component';

import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //Every component must be declared in one—and only one—Angular module.
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
