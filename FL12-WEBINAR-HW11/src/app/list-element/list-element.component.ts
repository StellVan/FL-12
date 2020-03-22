import { Component, OnInit, Input } from "@angular/core";
import { ContactsService } from "../shared/contacts.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Abonent } from "../shared/contacts.service";

@Component({
  selector: "app-list-element",
  templateUrl: "./list-element.component.html",
  styleUrls: ["./list-element.component.less"]
})
export class ListElementComponent implements OnInit {
  @Input() list: Abonent;
  @Input() index: number;

  constructor(public listService: ContactsService) {}

  buttonStatus: boolean = true;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required)
  });

  editToogle() {
    this.form = new FormGroup({
      name: new FormControl(this.list.name),
      email: new FormControl(this.list.email),
      number: new FormControl(this.list.phone)
    });
    this.list.edit = true;
  }

  savebtn(index: number): void {
    this.listService.saveChanges(index, this.form.value);
  }

  discardChanges(index: number): void {
    if (this.list.added) {
      this.list.edit = false;
    } else if (!this.list.added) {
      this.listService.deleteContact(index);
    }
  }

  ngOnInit(): void {}
}
