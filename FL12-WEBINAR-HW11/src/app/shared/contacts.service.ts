import { Injectable } from "@angular/core";
import { from, pipe, Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

export interface Abonent {
  name: string;
  email: string;
  phone: string;
  edit: boolean;
  added: boolean;
}

@Injectable({ providedIn: "root" })
export class ContactsService {
  private url: string = "http://localhost:3000/users";
  public refresh = new Subject();

  constructor(private http: HttpClient) {}

  getContacts(): Observable<{}> {
    return this.http.get(this.url);
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
    // this.list.unshift({
    //   name: "",
    //   email: "",
    //   number: "",
    //   edit: true,
    //   added: false
    // });
  }

  saveChanges(index: number, form: any): void {
    // this.list[index].name = form.name;
    // this.list[index].email = form.email;
    // this.list[index].number = form.number;
    // this.list[index].edit = false;
    // this.list[index].added = true;
  }
}
