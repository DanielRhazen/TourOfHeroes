"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var hero_service_1 = require("./services/hero.service");
var hero_detail_component_1 = require("./hero-detail.component");
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./heroes.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'heroes',
                    component: heroes_component_1.HeroesComponent
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                }
            ])
        ],
        //Every component must be declared in one—and only one—Angular module.
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            hero_service_1.HeroService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map