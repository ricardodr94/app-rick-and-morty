import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//componentes
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
    {
      path:'pages',
      loadChildren:()=>import('./pages/pages.module').then(p=>p.PagesModule)
    },
    {
      path:"**", component:NopagefoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
