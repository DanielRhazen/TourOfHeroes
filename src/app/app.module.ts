import { DashboardComponent } from './dashboard.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroService } from './services/hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes', //combina suas rotas com a URL do broswer
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard', //para que qnd o app iniciar seja redirecionado para dashboard 
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  //Every component must be declared in one—and only one—Angular module.
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    HeroService
  ]
})
export class AppModule { }
