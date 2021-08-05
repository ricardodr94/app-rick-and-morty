import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICapituloDTO, IPersonajeCapituloDTO } from 'src/app/models/ICapitulo';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent  {

  listaCapitulos: ICapituloDTO[] = [];

  constructor( private appService: AppService, 
    private router : Router) { 
    this.appService.getDataCapitulos()
      .subscribe(( dataCapitulos: any ) =>{
      this.listaCapitulos = dataCapitulos.results;
      this.setNameUrlPersonajes(); 
    });
  }

  setNameUrlPersonajes(){
    for ( let i = 0; i < this.listaCapitulos.length; i++ ) {
      const dataNamePersonajes = this.listaCapitulos[i];
      let  urlPersonajes = dataNamePersonajes.characters
      dataNamePersonajes.personajes = [];

      for (let j = 0; j < urlPersonajes.length; j++) {
        const urli = urlPersonajes[j];
        let personaje = { url:urli,name:"" };

          this.appService.getUrlListadoPersonajes( urli )
          .subscribe(( result:any )=> {
            personaje.name = result.name;
          });
          dataNamePersonajes.personajes.push( personaje );
      }
    }
  }

 // metodo para filtar busqueda en el buscador para caítulos

  setUrlSearchCapitulos( termino: string ){
    this.appService.getFilterPersonajes( termino )
      .subscribe( ( data: any ) => {
        this.listaCapitulos = data.results;
        this.setNameUrlPersonajes();
      });    
  } 

  verCapitulos( item :IPersonajeCapituloDTO ){
    let url=item.url;
    this.router.navigate(['/personaje',url.split('/')[5]]);
  }
}


