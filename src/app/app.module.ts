import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { PhotoGridComponent } from "./photo-grid/photo-grid.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, SearchComponent, PhotoGridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
