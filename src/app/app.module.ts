import { HeroService } from './services/hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  //Every component must be declared in one—and only one—Angular module.
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    HeroService
  ]
})
export class AppModule { }
