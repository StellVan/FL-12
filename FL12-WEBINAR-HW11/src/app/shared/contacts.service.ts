import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

export interface Abonent {
  id: string;
  name: string;
  email: string;
  phone: string;
  adress?: {};
  website?: string;
}

@Injectable({ providedIn: "root" })
export class ContactsService {
  private url: string = "http://localhost:3000/users";
  public refresh = new Subject();
  public list: any = [];

  constructor(private http: HttpClient, private router: Router) {}

  private RNG() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

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

  saveChanges(form: Abonent, index?: number): void {
    let dataToPush: Abonent = {
      id: this.RNG(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      adress: form.adress,
      website: form.website
    };

    this.http.post(this.url, dataToPush).subscribe(() => {
      this.router.navigate(["users"]);
    });
  }
}
