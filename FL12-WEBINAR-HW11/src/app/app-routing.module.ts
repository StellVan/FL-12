import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from "./list/list.component";
import { AddUserComponent } from "./add-user/add-user.component";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "users" },
  { path: "users", component: ListComponent },
  {
    path: "users/new",
    component: AddUserComponent,
    data: { title: "New User" }
  },
  {
    path: "users/edit",
    component: AddUserComponent,
    data: { title: "Edit User" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
