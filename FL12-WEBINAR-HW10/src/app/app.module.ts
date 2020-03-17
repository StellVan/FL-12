import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ListElementComponent } from "./list-element/list-element.component";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [AppComponent, ListComponent, ListElementComponent, FilterPipe],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
