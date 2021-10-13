import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { HairNailService } from "../services/hair-nail.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  admin: any = {};

  constructor(private __hairnail: HairNailService, private router: Router) {}

  ngOnInit() {
    this.load();
  }

  // Routing

  book() {
    // this.router.navigate(["/bookings"]);
  }

  //Get all hair and nais data

  async load() {
    this.admin = await this.__hairnail.getAllDetails();
    console.log(await this.__hairnail.getAllDetails());
  }
}
