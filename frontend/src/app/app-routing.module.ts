import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Home/components/home/home.component';
import { CarsSectionComponent } from '../Home/components/cars-section/cars-section.component';
import { CarDescComponent } from '../Home/components/cars-section/car-desc/car-desc.component';
import { CarfilterComponent } from '../Home/components/cars-section/carfilter/carfilter.component';
import {ReportComponent} from '../Home/components/cars-section/report/report.component';


const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'cars', component:CarsSectionComponent},
  { path: 'carfilter', component: CarfilterComponent },
  { path: 'car-desc/:id', component: CarDescComponent },
  { path: 'report/:id', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
