import { Component, OnInit, Input } from "@angular/core";
import { ContactsService } from "../shared/contacts.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Abonent } from "../shared/contacts.service";

@Component({
  selector: "app-list-element",
  templateUrl: "./list-element.component.html",
  styleUrls: ["./list-element.component.less"]
})
export class ListElementComponent implements OnInit {
  @Input() list: Abonent;
  @Input() index: number;

  constructor(public listService: ContactsService, private router: Router) {}

  buttonStatus: boolean = true;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required)
  });

  editToogle() {
    this.router.navigate([`users/${this.list.id}`]);
  }

  ngOnInit(): void {}
}
