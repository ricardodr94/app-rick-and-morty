import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componentes del Modulo
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { CapitulosPersonajeComponent } from './capitulos-personaje/capitulos-personaje.component';

//Modulo de funciones
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    CapitulosComponent,
    CapitulosPersonajeComponent
   
  ],
  exports:[
    PersonajesComponent,
    CapitulosComponent,
    HomeComponent,
    CapitulosPersonajeComponent
  

  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
