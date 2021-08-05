import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICapituloPersonajeDTO, IPersonajeDTO } from 'src/app/models/IPersonaje';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-capitulos-personaje',
  templateUrl: './capitulos-personaje.component.html',
  styleUrls: ['./capitulos-personaje.component.css']
})

export class CapitulosPersonajeComponent  {
  
  personajes: IPersonajeDTO[]=[];
  capitulo: ICapituloPersonajeDTO[] = [];
  personaje: any = {};
  url:string = "";
  


  constructor(private router:ActivatedRoute,
              private appService: AppService){
    this.router.params.subscribe((param:any)=>{
      this.getConsultarPersonaje(param["id"]);
      
    })      
   
    
  }

  getConsultarPersonaje(id:string){
    this.appService.getDataPersonaje(id)
        .subscribe((dataPersonaje)=>{
            this.personaje = dataPersonaje;
            this.setNameUrlPersonajes();

        })

  }

  setNameUrlPersonajes(){

      const urlCapitulosPersonajes = this.personaje.episode;
      this.personaje.capitulos=[];
      for (let j = 0; j < urlCapitulosPersonajes.length; j++) {
        let capitulo = { url:urlCapitulosPersonajes[j],name:"" };
        this.appService.getData(capitulo.url)
        .subscribe(( dataCapitulo: any ) =>{
          capitulo.name=dataCapitulo.name;
        });
        this.personaje.capitulos.push(capitulo);
      }    
  }

}
