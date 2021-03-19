import { Component, OnInit } from '@angular/core';
import { PokePage } from '../PokePage'
import { PokemonsService } from '../pokemons.service'
import { ActivatedRoute, Router } from '@angular/router';

interface PokeSearch{
  name: string, url: string
}

@Component({
  selector: 'app-search-pokemons',
  templateUrl: './search-pokemons.component.html',
  styleUrls: ['./search-pokemons.component.css']
})
export class SearchPokemonsComponent implements OnInit {

  pokeSearch: PokeSearch[]
  page = 1
  limit: number

  constructor(private pokeService: PokemonsService, private route: ActivatedRoute, private router: Router) {
    /* Fetch API data */
    this.route.queryParams.subscribe(params =>{

      this.page = Number(params.page) || 1
      
      this.pokeService.getPokeList(this.page).subscribe({
        next: (result: PokePage) => {
          this.limit = (Math.floor(result.count / 50)) + 1
          this.pokeSearch = result.results
        },
        error: () => console.log('An error has ocurred when contacting the API')
      })
    })
  }

  ngOnInit(): void {
  }

  goToPokemon(pokemon: PokeSearch){
    const id = pokemon.url.split('/')[6]
    this.router.navigate(['pokemon', id])
  }
}
