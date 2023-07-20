import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
pokemons:any = []
  constructor(private httpClient: HttpClient) {
this.caricaPokemons();
   }

async caricaPokemons(){
const requisito  = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=649').toPromise()

this.pokemons = requisito.results;
}
}

