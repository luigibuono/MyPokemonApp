import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './shared/poke-list/poke-list.component';
import { DetailsComponent } from './shared/details/details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [


  {path:'pokemon-list', component:PokemonListComponent},

  {
    path: '',
    component: PokeListComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
