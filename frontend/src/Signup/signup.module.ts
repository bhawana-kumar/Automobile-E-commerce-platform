import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';


import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { ShortlistedVehiclesComponent } from './profile/shortlisted-vehicles/shortlisted-vehicles.component';
import { ProfileSettingsComponent } from './profile/profile-settings/profile-settings.component';
import { YourOrderHistoryComponent } from './profile/your-order-history/your-order-history.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ViewProfileComponent,
    ShortlistedVehiclesComponent,
    ProfileSettingsComponent,
    YourOrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ViewProfileComponent,
    ShortlistedVehiclesComponent,
    ProfileSettingsComponent,
    YourOrderHistoryComponent
  ]
})
export class signupModule { }
