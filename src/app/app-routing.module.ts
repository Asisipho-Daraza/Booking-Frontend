import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';


const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "/" },
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bookings', component: BookingsComponent}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
