import { Injectable } from "@angular/core";

export interface Abonent {
  name: string;
  email: string;
  number: string;
  edit: boolean;
  added: boolean;
}

@Injectable({ providedIn: "root" })
export class ContactsService {
  public list: Abonent[] = [
    {
      name: "StellVan",
      email: "red@gmail.com",
      number: "88005553535",
      edit: false,
      added: true
    },
    {
      name: "Varvara",
      email: "green@gmail.com",
      number: "38050505050",
      edit: false,
      added: true
    },
    {
      name: "Ermak",
      email: "blue@gmail.com",
      number: "231412423123",
      edit: false,
      added: true
    }
  ];

  constructor() {}

  deleteContact(index: number): void {
    this.list.splice(index, 1);
  }

  addNewContact(): void {
    this.list.unshift({
      name: "",
      email: "",
      number: "",
      edit: true,
      added: false
    });
  }

  saveChanges(index: number, form: any): void {
    this.list[index].name = form.name;
    this.list[index].email = form.email;
    this.list[index].number = form.number;
    this.list[index].edit = false;
    this.list[index].added = true;
  }
}
