import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

export interface Abonent {
  name: string;
  email: string;
  phone: string;
}

@Injectable({ providedIn: "root" })
export class ContactsService {
  private url: string = "http://localhost:3000/users";
  public refresh = new Subject();
  public list: any = [];

  constructor(private http: HttpClient, private router: Router) {}

  getContacts(): Observable<{}> {
    return this.http.get(this.url);
  }

  getUsers() {
    this.getContacts().subscribe(
      el => (this.list = el),
      null,
      () => {
        console.log(this.list);
      }
    );
  }

  deleteContact(index: number) {
    let userUrl: string = this.url + `/${index}`;
    return this.http
      .delete(userUrl)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      )
      .subscribe();
  }

  addNewContact(): void {
    this.router.navigate(["users/new"]);
  }

  saveChanges(index: number, form: Abonent): void {
    let dataToPush: Abonent = {
      name: form.name,
      email: form.email,
      phone: form.phone
    };

    this.http.post(this.url, dataToPush).subscribe(() => {
      this.router.navigate(["users"]);
    });
    // this.list[index].name = form.name;
    // this.list[index].email = form.email;
    // this.list[index].number = form.number;
  }
}
