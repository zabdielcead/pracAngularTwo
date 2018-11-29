import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Heroe [] = [];

  constructor( private _heroesService: HeroesService ) {
    // constructor se ejecuta  mucho antes que el ngOnInit
    console.log('constructor');
  }
  ngOnInit() {
    // es utilizado cuando la pagina ya esta rendrizada pero esta en el inicio como un constructor su comportamiento
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
