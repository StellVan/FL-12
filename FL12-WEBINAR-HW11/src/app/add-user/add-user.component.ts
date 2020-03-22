import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../shared/contacts.service";
import { ActivatedRoute, Router } from "@angular/router";
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
    address: new FormControl(""),
    website: new FormControl("")
  });

  constructor(
    public listService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  savebtn(): void {
    if (this.id) {
      this.listService.saveChanges(this.form.value, this.id);
    }
    this.listService.saveChanges(this.form.value);
  }

  backToMainPage() {
    this.router.navigate(["users"]);
  }

  discardChanges(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      address: new FormControl(""),
      website: new FormControl("")
    });
  }

  ngOnInit(): void {}
}
