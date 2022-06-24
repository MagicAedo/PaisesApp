import { Component, OnInit, Input } from '@angular/core';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/searchingCountrys.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer
    }`
  ]
})
export class PorPaisComponent {
  @Input() termino: string = '';

  mostrarSugerencias:boolean = false; 

  error_peticion: boolean = false;

  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  constructor(private servicioPais: PaisService) { }



  public paisesObserver = {
    next: (resp: Country[]) => {
      this.paises = resp;
    },
    error: (error: Error) => {
      this.error_peticion = true;
    }
  }



  buscar(termino: string) {
    this.termino = termino;
    this.error_peticion = false;

    console.log(this.paises);

    this.servicioPais.buscarPais(this.termino).subscribe(this.paisesObserver);


  }


  sugerencias(termino: string) {
    this.termino = termino; 
    this.mostrarSugerencias = true; 
    this.error_peticion = false;
    this.servicioPais.buscarPais(termino).subscribe(
      paises => {
        this.paisesSugeridos = paises.splice(0, 5);
      }, error => {
        this.paisesSugeridos = []
        this.mostrarSugerencias= false;
      }

    )
  }

  buscarSugerencia(termino:string){ 
    this.buscar(termino);
  }


}

//private apiUrl: string = 'https://restcountries.com/v2';