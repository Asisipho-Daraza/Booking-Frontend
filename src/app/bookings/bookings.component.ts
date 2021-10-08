import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { startOfDay, endOfDay } from 'date-fns';
// import { CalendarEvent } from 'mdb-calendar';

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.css"],
})
export class BookingsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(["/dashboard"]);
  }
}
