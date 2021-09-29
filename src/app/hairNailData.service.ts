import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HairNailDataService {
  constructor(private __http: HttpClient) {}

  set_data: any;

  url = environment.url;

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
    return this.__http.get(this.url).toPromise();
  }
}
