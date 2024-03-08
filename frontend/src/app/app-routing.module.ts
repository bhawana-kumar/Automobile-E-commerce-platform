import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from '../Admin/Dashboard/dashboard.component';
import { customerMangementComponent } from '../Admin/customerMangement/cm.component';
import { contentMangementComponent } from '../Admin/contentManagement/contentMan.component';
import {reportsComponent } from '../Admin/reports/reports.component';
import { userDetailsComponent } from '../Admin/userDetails/userDetails.component';
import { adminLoginComponent } from '../Admin/adminLogin/adminLogin.component';
import { orderManagementComponent } from '../Admin/ordersManagement/ordersManagement.compnent';
import { orderDetailsComponent } from '../Admin/orderDetails/orderDetails.component';
import { DashComponent } from '../Admin/dash/dash.component';
import { vehicleManagementComponent } from '../Admin/vehicleManagement/vehicleManagement.component';
import { vehicleDetailsComponent } from '../Admin/vehicleDetails/vehicleDetails.component';
import { HomeComponent } from '../Home/components/home/home.component';
import { CarsSectionComponent } from '../Home/components/cars-section/cars-section.component';
import { CarfilterComponent } from '../Home/components/cars-section/carfilter/carfilter.component';
import { CarDescComponent } from '../Home/components/cars-section/car-desc/car-desc.component';
import { ReportComponent } from '../Home/components/cars-section/report/report.component';


const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'cars', component:CarsSectionComponent},
  { path: 'carfilter', component: CarfilterComponent },
  { path: 'car-desc/:id', component: CarDescComponent },
  { path: 'report/:id', component: ReportComponent },
    // Admin Routes
    {path: 'admin', component: dashboardComponent, children: [
      // { path: 'dashboard',redirectTo: '/admin', pathMatch: 'full' },
      { path: '', component: DashComponent},
      { path: 'dashboard', component: DashComponent},
      { path: 'customerManagement', component: customerMangementComponent },
      { path: 'customerManagement/:id', component: userDetailsComponent },
      { path: 'orderManagement', component: orderManagementComponent },
      { path: 'orderManagement/:id', component: orderDetailsComponent },
      { path: 'contentManagement', component: contentMangementComponent },
      { path: 'reports', component:reportsComponent },
      { path: 'vehicleManagement', component: vehicleManagementComponent },
      {path: 'vehicleManagement/:id', component: vehicleDetailsComponent}
    ]}
  ,
  { path: 'admin/login', component: adminLoginComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
