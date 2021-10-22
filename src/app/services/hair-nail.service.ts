import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class HairNailService {
  constructor(
    private __http: HttpClient,
    private __route: Router,
    private __toast: ToastrService
  ) {}

  success_message: string = "";
  form_errors: any = {};
  set_data: any;

  url = environment.URL;

  addNewDetails(hairnails: any) {
    this.__http.post(`${this.url}`, hairnails).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.warn(err);
      }
    );
  }

  //Get all Admin data

  async getAllDetails() {
    return await this.__http.get(`${this.url}/admin-side/`).toPromise();
  }

  // Get single Admin Data
  async getASingleStyleDetail(adminId: string) {
    return await this.__http.get(`${this.url}/${adminId}`).toPromise();
  }

  //Update a single detail

  updateOneDetail(admins: any) {
    return this.__http.patch(`${this.url}/${admins.id}`, admins).subscribe(
      (res: any) => {
        this.success_message = "Details updated!";
        this.__route.navigate(["/"]);
      },
      (err: any) => {
        console.warn(err.error);
        if (err.error.errors) return (this.form_errors = err.error.errors);
        this.showError(err.error.message);
        setTimeout(() => {
          this.form_errors = {};
        }, 1000);
      }
    );
  }

  //Search

  async searchDetails(search_text: string) {
    return await this.__http
      .get(`${this.url}/search?s=${search_text}`)
      .toPromise();
  }

  //Delete one admin detail

  deleteOneDetail(adminId: string) {
    return this.__http.delete(`${this.url}/${adminId}`).subscribe(
      (res: any) => {
        this.__toast.warning("Style  Deleted!", "Warning");
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (err: any) => {
        if (err.error.errors) return (this.form_errors = err.error.errors);
        this.showError(err.error.message);
        setTimeout(() => {
          this.form_errors = {};
        }, 1000);
      }
    );
  }

  showSuccess(message: string) {
    this.__toast.success(message, "Successful");
  }

  showError(message: string) {
    this.__toast.error(message, "Error");
  }
}
