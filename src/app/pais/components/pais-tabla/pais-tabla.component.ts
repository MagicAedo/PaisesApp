import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/searchingCountrys.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent  {
  @Input() paises:Country[] = []; 

}
