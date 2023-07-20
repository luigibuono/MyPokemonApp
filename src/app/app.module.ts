import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './shared/poke-header/poke-header.component';
import { PokeSearchComponent } from './shared/poke-search/poke-search.component';
import { PokeListComponent } from './shared/poke-list/poke-list.component';
import { DetailsComponent } from './shared/details/details.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MaterialModule } from 'src/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    DetailsComponent,
    PokemonCardComponent,
    PokemonListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
