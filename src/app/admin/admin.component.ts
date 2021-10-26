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

  adminId: any;
  styles: any = [];
  search: string;

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

  async searchStyle(search_text: string) {
    this.styles = await this.__hairnail.searchDetails(search_text);
  }

  // Get single product

  //Edit Product

  // Delete Product

  deleteDetail(admindata: any) {
    this.__hairnail.deleteOneDetail(admindata.id);
    // window.location.reload();
  }

  // deleteDetail() {
  //   console.log(this.selected_detail.id);
  //   this.__hairnail.deleteOneDetail(this.selected_detail.id);
  //   window.location.reload();
  // }

  // deleteDetail() {
  //   console.log(this.selected_contact.id);
  //   this.__phonebook.deletePhonebook(this.selected_contact.id);
  //   window.location.reload();
  // }
}
