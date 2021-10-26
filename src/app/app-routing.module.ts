import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminModalComponent } from "./admin-modal/admin-modal.component";
import { OptionsComponent } from "./options/options.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "/dashboard" },
  // { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "bookings", component: BookingsComponent },
  { path: "admin", component: AdminComponent },
  { path: "edit", component: AdminModalComponent },
  { path: "contactUs", component: OptionsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
