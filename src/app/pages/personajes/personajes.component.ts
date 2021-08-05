import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPersonajeDTO } from 'src/app/models/IPersonaje';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  listaPersonajes: IPersonajeDTO[] = [];

  constructor( private appService: AppService , 
    private router : Router ) {
    this.appService.getDataPersonajes()
      .subscribe(( dataPersonajes: any ) =>{
      this.listaPersonajes = dataPersonajes.results;
      this.setNameUrlPersonajes();      
    });        
  }

  setNameUrlPersonajes(){
    for ( let i = 0; i < this.listaPersonajes.length; i++ ) {
      const dataNameCapitulos = this.listaPersonajes[i];
      let  urlCapitulos = dataNameCapitulos.episode;
      dataNameCapitulos.capitulos = [];

      for (let j = 0; j < urlCapitulos.length; j++) {
        const urli = urlCapitulos[j];
        let capitulo = { url:urli,name:"" };
        this.appService.getUrlListadoPersonajes(urli)
          .subscribe((result:any)=> {
          capitulo.name = result.name;
        });  
        dataNameCapitulos.capitulos.push(capitulo);
      }
    } 
  }

  verCapitulos( item : number ){
    this.router.navigate(['/pages/personaje',item]);
  }

  // metodo para filtar busqueda en el buscador para personajes

  setUrlSearchPersonajes( termino: string ){
    this.appService.getFilterCapitulos( termino )
      .subscribe( ( data: any ) => {
        this.listaPersonajes = data.results;
      });
  }
      
}



