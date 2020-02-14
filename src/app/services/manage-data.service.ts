import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ManageDataService {
  constructor(private http: HttpClient) {}

  getData(keyword: string): Observable<any> {
    return this.http.get(
      `https://api.unsplash.com/search/photos?client_id=<YOUR_ACCESS_KEY>&query=${keyword}`
    );
  }
}
