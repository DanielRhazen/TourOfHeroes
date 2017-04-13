import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; 
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http){ }
    
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[]) //callback, metodo json do Http para extrair os dados com a resposta
                    .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('Um error ocorreu', error);
        return Promise.reject(error.message || error);
    }
    //para buscar um heroi pelo id utilizando o http
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`; //url com o id do heroi
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    //function add
    create(name: string): Promise<Hero> {
      return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
    }
}