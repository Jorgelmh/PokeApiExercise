import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Route} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

/* Angular components */
import { AppComponent } from './app.component';
import { SearchPokemonsComponent } from './search-pokemons/search-pokemons.component'
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component'
import { NotFoundComponent } from './not-found/not-found.component'

/* Services */
import { PokemonsService } from './pokemons.service'

/**
 *  ======================
 *         ROUTES
 *  ======================
 */
const routes: Route[] = [
  {
    path: '', component: SearchPokemonsComponent,
  },
  {
    path: 'pokemon/:pokeid', component: SinglePokemonComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonsComponent,
    SinglePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })  
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
