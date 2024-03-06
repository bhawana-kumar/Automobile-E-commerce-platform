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


const routes: Routes = [
  {
    path: 'admin', component: dashboardComponent, children: [
      // { path: 'dashboard',redirectTo: '/admin', pathMatch: 'full' },
      { path: 'dashboard', component: DashComponent },
      { path: 'customerManagement', component: customerMangementComponent },
      { path: 'customerManagement/:id', component: userDetailsComponent },
      { path: 'orderManagement', component: orderManagementComponent },
      { path: 'orderManagement/:id', component: orderDetailsComponent },
      { path: 'contentManagement', component: contentMangementComponent },
      { path: 'reports', component:reportsComponent },
      { path: 'productManagement', component: vehicleManagementComponent }
    ]
  },
  { path: 'admin/login', component: adminLoginComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
