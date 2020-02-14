import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor() {}
  @Output() searchKey = new EventEmitter();
  searchVal: string = "";

  sendData() {
    if (this.searchVal === "" || this.searchVal === null) {
      alert("Enter Search Keyword");
      return false;
    } else {
      this.searchKey.emit(this.searchVal);
    }
  }

  ngOnInit() {}
}
