import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarfilterComponent } from './carfilter/carfilter.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
   { path: 'home', redirectTo: '/default', pathMatch: 'full' },
{ path: 'carfilter', component: CarfilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
