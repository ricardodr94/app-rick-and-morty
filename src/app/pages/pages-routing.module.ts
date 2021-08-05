import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { CapitulosPersonajeComponent } from './capitulos-personaje/capitulos-personaje.component';

//Componentes
import { CapitulosComponent } from "./capitulos/capitulos.component";
import { HomeComponent } from "./home/home.component";
import { PersonajesComponent } from "./personajes/personajes.component";


 const PAGES_ROUTES: Routes = [
     {
        path: '',
        children: [
           {path:'home', component: HomeComponent},
           {path:'personajes', component: PersonajesComponent},
           {path:'capitulos', component: CapitulosComponent},
           {path: 'personaje/:id', component: CapitulosPersonajeComponent  },
           {path:"", redirectTo:"/home", pathMatch:"full" }
        ]
     }
 ];

 @NgModule({
     imports:[
        RouterModule.forChild(PAGES_ROUTES)
     ],
     exports:[RouterModule]
})

 export class PagesRoutingModule {}