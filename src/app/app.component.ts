import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ManageDataService } from "./services/manage-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "apitesting";

  keyword: string;
  imageList: any;
  constructor(private http: HttpClient, private service: ManageDataService) {}

  exparent($event) {
    this.keyword = $event;
    this.getImages(this.keyword);
  }

  getImages(keyword) {
    this.service.getData(keyword).subscribe(val => {
      this.imageList = val["results"];
      console.log(val["results"]);
    });
  }
}
