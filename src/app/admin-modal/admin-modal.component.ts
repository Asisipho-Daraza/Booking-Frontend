import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HairNailService } from "../services/hair-nail.service";

@Component({
  selector: "app-admin-modal",
  templateUrl: "./admin-modal.component.html",
  styleUrls: ["./admin-modal.component.scss"],
})
export class AdminModalComponent implements OnInit {
  constructor(
    public __hairnail: HairNailService,
    private __activatedRoute: ActivatedRoute,
    private __route: Router
  ) {}

  adminForm = new FormGroup({
    price: new FormControl(""),
    image: new FormControl(""),
    id: new FormControl(""),
  });

  adminId: any;

  ngOnInit(): void {
    this.load();
  }

  async load() {
    let admindata: any = {};
    this.adminId = this.__activatedRoute.snapshot.params;

    if (!this.adminId.id) return;

    await this.__hairnail
      .getASingleStyleDetail(this.adminId.id)
      .then((res: any) => {
        admindata = res;
      })
      .catch((err: any) => {
        this.__hairnail.showError(err.error.message);
        setTimeout(() => {
          this.__route.navigate(["/"]);
        }, 1000);
      });

    this.adminForm.patchValue(admindata);
  }

  submitDetails() {
    if (this.adminForm.value.email.trim() === "")
      delete this.adminForm.value.email;
    if (!this.adminId.id)
      return this.__hairnail.addNewDetails(this.adminForm.value);
    return this.__hairnail.updateOneDetail(this.adminForm.value);
  }
}
