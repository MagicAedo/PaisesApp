import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchingCountrys.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones:string[] = ['europe','americas','asia','oceania','africa'];
  paises: Country[] = []; 

  regionActiva:string = '';

  public paisesObserver = {
    next: (resp: Country[]) => {
      this.paises = resp;
      console.log(this.paises)
    }
  }



  constructor(private paisService:PaisService) { }

  llamarRegion(region:string){ 
    this.regionActiva = region;
    this.paisService.buscarPorRegion(region).subscribe(this.paisesObserver);
 
  }

  getClass(region:string){ 
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn-outline-primary'
  }

  



}
