import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;



  constructor(
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res=>{

        this.setAllPokemons =  res.results
        this.getAllPokemons = this.setAllPokemons

      }
    );
  }


  public getsearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any)=>{
      return !res.name.indexOf(value.toLocaleLowerCase());
    })

    this.getAllPokemons =  filter;

  }
  @Input()
  numero! : number

  @Input ()
pokemon!: string;

  pageImagePokemon(){
    const numeroFormattato = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormattato}.png`
  }
  leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)){
    s='0' +s;
    }
    return s;
  }
}
