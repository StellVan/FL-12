import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../shared/contacts.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.less"]
})
export class AddUserComponent implements OnInit {
  id: number;
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    adress: new FormControl(""),
    website: new FormControl("")
  });

  constructor(
    public listService: ContactsService,
    private route: ActivatedRoute
  ) {}

  savebtn(index?: number): void {
    this.listService.saveChanges(index, this.form.value);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }
}
