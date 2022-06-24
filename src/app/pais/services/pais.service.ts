import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/searchingCountrys.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient) { }


  buscarPais(termino:string ):Observable<Country[]>{
      const url:string = `
        ${this.apiUrl}/name/${termino}
      `
      return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string ):Observable<Country[]>{
    const url:string = `
      ${this.apiUrl}/capital/${termino}
    `
    return this.http.get<Country[]>(url);
}

  buscarPorAlpha(termino:string):Observable<Country[]>{
    const url:string = `
      ${this.apiUrl}/alpha?codes=${termino}
    `
    return this.http.get<Country[]>(url);

  }

  buscarPorRegion(termino:string):Observable<Country[]>{ 
    //Se va a optimizar la busqueda estableciendo los parametros unicamente necesarios: 

    // const params = new HttpParams().set('fields','name;cca2;capital;population;flags')


    const url:string = `${this.apiUrl}/region/${termino}`

    return this.http.get<Country[]>(url) //{params}  
  }


}
