import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {}; // @Input() puede venir de afuero del component padre
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    console.log( 'elemento hijo');
    // console.log(this.index);
    // this._router.navigate(['/heroe', this.index]);
    // aki vamos a llamar una funcion del padre  verHeroe(idx: number) {} en los imports se va usar output y eventemitter
    this.heroeSeleccionado.emit( this.index );
  }

}
