import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { BookingsComponent } from "./bookings/bookings.component";
import { HairNailService } from "./services/hair-nail.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HairNailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
