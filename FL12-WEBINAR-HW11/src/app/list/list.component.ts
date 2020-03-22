import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../shared/contacts.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"]
})
export class ListComponent implements OnInit {
  searchText: string = "";

  constructor(public listService: ContactsService) {}

  ngOnInit(): void {
    this.listService.refresh.subscribe(() => {
      this.listService.getUsers();
    });

    this.listService.getUsers();
  }
}
