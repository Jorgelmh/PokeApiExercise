import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PokePage } from './PokePage'
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  readonly url = 'https://pokeapi.co/api/v2/pokemon/'
  /* results shown per view */
  readonly perView = 50
  
  constructor(private http: HttpClient) { 
    console.log('Service Working!')
  }

  getPokeList(page: number): Observable<PokePage>{
    /* Work out url */
    const apiRequest = this.url + `?limit=50&offset=${(page-1) * this.perView}`
    return this.http.get<PokePage>(apiRequest)
  }

  getPokemon(id: number): Observable<Pokemon>{
    /* Work out url */
    const apiRequest = this.url + `${id}`
    return this.http.get<Pokemon>(apiRequest)
  }
}
