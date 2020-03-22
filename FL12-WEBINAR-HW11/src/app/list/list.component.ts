import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../shared/contacts.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"]
})
export class ListComponent implements OnInit {
  searchText: string = "";
  public list: any = [];
  constructor(public listService: ContactsService) {}

  private getUsers() {
    this.listService.getContacts().subscribe(
      el => (this.list = el),
      null,
      () => {
        console.log(this.list);
      }
    );
  }

  ngOnInit(): void {
    this.listService.refresh.subscribe(() => {
      this.getUsers();
    });

    this.getUsers();
  }
}
