import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarfilterComponent } from './carfilter/carfilter.component';
import { SellerPageComponent } from './seller-page/seller-page.component';

const routes: Routes = [ 
{ path: 'home', redirectTo: '/default', pathMatch: 'full' },
{ path: 'carfilr', component: CarfilterComponent },
// { path:'' , component:SellerPageComponent},
{path:'getSellers/:id', component: SellerPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
