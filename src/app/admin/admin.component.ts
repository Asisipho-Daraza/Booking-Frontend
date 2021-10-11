import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { HairNailService } from "../services/hair-nail.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  admin: any = {};

  constructor(
    private __hairnail: HairNailService,
    private __activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // Form

  adminForm = new FormGroup({
    price: new FormControl(""),
    image: new FormControl(""),
    description: new FormControl(""),
    id: new FormControl(""),
  });

  adminId: any;

  ngOnInit() {
    this.load();
  }

  async load() {
    this.admin = await this.__hairnail.getAllDetails();
    console.log(await this.__hairnail.getAllDetails());
  }

  // async load(){
  // 	let admindata: any = {};
  // 	this.adminId = this.__activatedRoute.snapshot.params;

  // Search Hair/Nail

  // Get single product

  //Edit Product

  // Delete Product
}
