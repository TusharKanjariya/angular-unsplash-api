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
      `https://api.unsplash.com/search/photos?client_id=da4838db6ab1450a9520ab011832d60b663bb701543e8bbe68297382f797a3be&query=${keyword}`
    );
  }
}
