import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { FetchVehicleComponent } from './fetch-vehicle/fetch-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SellerPageComponent } from '../seller-page/seller-page.component';
import { FetchComponent } from '../fetch/fetch.component';

const routes: Routes = [
{ path:'edit-product/:id' , component:EditVehicleComponent},
{path:'addvehicle', component: AddVehicleComponent},
{ path: 'add-vehicle', component: AddVehicleComponent },
{ path: 'fetch-vehicle', component: FetchComponent }
// { path: '', redirectTo: 'fetch-vehicle', pathMatch: 'full' } // Default route
 ,{path:'getSellers/:id', component: SellerPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
