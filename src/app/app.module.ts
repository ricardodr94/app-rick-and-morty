import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos de funciones
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './shared/components/components.module';

//Servicio cliente HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//componentes
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
