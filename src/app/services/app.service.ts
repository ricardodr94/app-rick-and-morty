import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICapituloDTO } from '../models/ICapitulo';
import { IPersonajeDTO } from '../models/IPersonaje';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url_api = 'https://rickandmortyapi.com/api/';
  private personaje:IPersonajeDTO[] = [];
  constructor(private http:HttpClient) { }

  //Metodo para obtener datos de personajes
  getDataPersonajes():Observable<IPersonajeDTO>{ 
    return this.http.get<IPersonajeDTO>(`${this.url_api}character/`);      
  }

  //Metodo para obtener datos de capitulos
  getDataCapitulos():Observable<ICapituloDTO>{
    return this.http.get<ICapituloDTO>(`${this.url_api}episode/`);
  }

   //Metodo para obtener listado de personajes de la url de capitulos
   getUrlListadoPersonajes( url:string){
    return this.http.get(url);       
  }

  
  //Metodo para filtrar personajes en el buscador
  getFilterCapitulos( termino:string ){
    return this.http.get(`${this.url_api}character/?name=${ termino }`);
  }

   //Metodo para filtrar capitulos en el buscador
   getFilterPersonajes( termino:string ){
    return this.http.get(`${this.url_api}episode/?name=${ termino }`);
  }

  //Metodo para obtener datos de capitulos
  getData(urlService:string){
    return this.http.get(urlService);
  }
  
  //metodo para obtener un solo personaje
  getDataPersonaje(id:string):Observable<IPersonajeDTO>{ 
    return this.http.get<IPersonajeDTO>(`${this.url_api}character/${ id }`);      
  }
}
