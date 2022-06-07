import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-inputs',
  templateUrl: './pais-inputs.component.html',
  styles: [
  ]
})
export class PaisInputsComponent implements OnInit  {
   
  @Output() onEnter = new EventEmitter<string>();

  @Output() onDebounce = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject(); 

  termino:string = ''; 

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( 
      (valor) => {
        this.onDebounce.emit(valor)

      }


    )
  }

  buscar(){ 
    this.onEnter.emit(this.termino); 
  }


  teclaPresionada(){
    this.debouncer.next(this.termino);
  }


}
