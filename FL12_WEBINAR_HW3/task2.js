'use strict';

class Employee {
  static _EMPLOYEES = new Set();
  constructor({
    id,
    firstName,
    lastName,
    birthday,
    salary,
    position,
    department
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.salary = salary;
    this.position = position;
    this.department = department;
    Employee._EMPLOYEES.add(this);
  }

  static get EMPLOYEES() {
    return Employee._EMPLOYEES;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get age() {
    let birthday = new Date(this.birthday).getFullYear();
    let actualDate = new Date().getFullYear();
    return actualDate - birthday;
  }

  quit() {
    Employee._EMPLOYEES.delete(this);
  }

  retire() {
    console.log('It was such a pleasure to work with you!');
    this.quit();
  }

  getFired() {
    console.log('Not a big deal!');
    this.quit();
  }

  changeDepartment(newDepartment) {
    this.department = newDepartment;
  }

  changePosition(newPosition) {
    this.position = newPosition;
  }

  changeSalary(newSalary) {
    this.salary = newSalary;
  }

  changeStatus(changes) {
    let keys = Object.keys(changes);
    for (let i = 0; i < keys.length; i++) {
      switch (keys[i]) {
        case 'salary':
          this.changeSalary(changes[keys[i]]);
          break;
        case 'position':
          this.changePosition(changes[keys[i]]);
          break;
        case 'department':
          this.changeDepartment(changes[keys[i]]);
          break;
        default:
          break;
      }
    }
  }

  getPromoted(benefits) {
    this.changeStatus(benefits);
    console.log('Yoohooo!');
  }

  getDemoted(punishment) {
    this.changeStatus(punishment);
    console.log('Damn!');
  }
}

class Manager extends Employee {
  constructor(n) {
    super(n);
    this.position = 'manager';
  }
  get managedEmployees() {
    return Array.from(Employee._EMPLOYEES).filter(
      el => el.department == this.department && el.position != 'manager'
    );
  }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
  constructor(n) {
    super(n);
    this.department = 'hr';
  }
}

class SalesManager extends Manager {
  constructor(n) {
    super(n);
    this.department = 'sales';
  }
}
