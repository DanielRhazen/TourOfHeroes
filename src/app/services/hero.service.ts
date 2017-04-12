import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; 

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
}