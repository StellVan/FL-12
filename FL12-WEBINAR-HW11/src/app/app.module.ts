import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ListElementComponent } from "./list-element/list-element.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListElementComponent,
    FilterPipe,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
