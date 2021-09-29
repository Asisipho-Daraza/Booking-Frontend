import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HairNailDataService } from "../hairNailData.service";

@Component({
  selector: "app-Dashboard",
  templateUrl: "./Dashboard.component.html",
  styleUrls: ["./Dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  //book: any = {};

  constructor(
    private __hairnail: HairNailDataService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.__hairnail.getAllDetails().subscribe((data: any) => {
  //     this.book = data;
  //   });
  // }
ngOnInit(){}
  // async ngOnInit() {
  //   this.book = await this.__hairnail.getAllDetails();
  //   console.log(await this.__hairnail.getAllDetails());
  // }
}
