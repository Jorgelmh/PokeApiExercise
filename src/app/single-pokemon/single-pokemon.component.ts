import { Component, OnDestroy, OnInit } from '@angular/core'
import { Pokemon } from '../Pokemon'
import { ActivatedRoute } from "@angular/router"
import { PokemonsService } from '../pokemons.service'
import { ViewEncapsulation } from '@angular/core'

const error = () => {
  alert('An error has occurred while contacting the API')
}
@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SinglePokemonComponent implements OnInit, OnDestroy {

  /* Pokemon attributes */
  pokemon: Pokemon
  id: number

  constructor(private pokeService: PokemonsService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe({
      next: (params) => {        
        this.id = Number(params.get('pokeid'))
        this.pokeService.getPokemon(this.id).subscribe({
          next: (result: Pokemon) => {
            this.pokemon = result
            console.log(result)
          },
          error
        })
      },
      error
    })
  }
  ngOnInit(): void {
    document.getElementsByTagName('body')[0].classList.add('bgBody')
  }
  ngOnDestroy(): void {
    document.getElementsByTagName('body')[0].classList.remove('bgBody')
  }
}
