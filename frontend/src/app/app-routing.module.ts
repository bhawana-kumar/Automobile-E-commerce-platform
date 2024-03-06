import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsSectionComponent } from './components/cars-section/cars-section.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'cars', component:CarsSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
