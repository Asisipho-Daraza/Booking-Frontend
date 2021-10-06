import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HairNailService {
  constructor(private __http: HttpClient) {}

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

  // //Get all Admin data

  async getAllDetails() {
    return await this.__http.get(`${this.url}/admin-side/`).toPromise();
  }
}
