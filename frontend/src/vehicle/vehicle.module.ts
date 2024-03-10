// import { NgModule, importProvidersFrom } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { VehicleRoutingModule } from './vehicle-routing.module';
// import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FetchVehicleComponent } from './fetch-vehicle/fetch-vehicle.component';
// import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
// import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
// import { SellerComponent } from './seller/seller.component'; // Import BrowserAnimationsModule for Angular Material animations
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatList, MatListModule} from '@angular/material/list';
// import { MatNavList } from '@angular/material/list';
// import { MatButtonModule } from '@angular/material/button';


// @NgModule({
//   imports: [
//     // Other imports
//     MatToolbarModule,
//     MatIconModule , 
//     MatCardModule, 
//     MatSidenavModule,
//     MatListModule, MatNavList, MatButtonModule
//   ]
// })
// export class AppModule { }



// @NgModule({
//   declarations: [
//     AddVehicleComponent,
//     FetchVehicleComponent,
//     SellerDashboardComponent,
//     EditVehicleComponent,
//     SellerComponent 
//   ],
//   imports: [
//     CommonModule,
//     VehicleRoutingModule,
//     MatIconModule,
//     MatCardModule, MatToolbarModule,MatSidenavModule,
//     MatNavList,
//     ReactiveFormsModule],
    
//   exports: [ AddVehicleComponent, FetchVehicleComponent , EditVehicleComponent , SellerComponent , SellerDashboardComponent]

// })
// export class VehicleModule { }




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchVehicleComponent } from './fetch-vehicle/fetch-vehicle.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SellerComponent } from './seller/seller.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AddVehicleComponent,
    FetchVehicleComponent,
    SellerDashboardComponent,
    EditVehicleComponent,
    SellerComponent 
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule ,
    MatSidenav,
    MatMenuModule,
  ],
  exports: [
    AddVehicleComponent,
    FetchVehicleComponent,
    EditVehicleComponent,
    SellerComponent,
    SellerDashboardComponent
  ]
})
export class VehicleModule { }
