import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Signup/home/home.component';
import { LoginComponent } from '../Signup/login/login.component';
import { RegisterComponent } from '../Signup/register/register.component';
import { ProfileComponent } from '../Signup/profile/profile.component';
import { BoardUserComponent } from '../Signup/board-user/board-user.component';
import { BoardAdminComponent } from '../Signup/board-admin/board-admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
