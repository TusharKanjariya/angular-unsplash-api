import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ManageDataService } from "../services/manage-data.service";

@Component({
  selector: "app-photo-grid",
  templateUrl: "./photo-grid.component.html",
  styleUrls: ["./photo-grid.component.css"]
})
export class PhotoGridComponent implements OnInit {
  constructor(private http: HttpClient, private service: ManageDataService) {}

  @Input() imageList: any;

  hoverIndex: any;
  showMessage: boolean = false;
  onHover(i: number) {
    this.hoverIndex = i;
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change.imageList);
    this.imageList = change.imageList.currentValue;
    if (this.imageList.length <= 0) {
      this.showMessage = true;
    } else {
      this.showMessage = false;
    }
  }

  ngOnInit() {}
}
