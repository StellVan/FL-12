'use strict';

function Employee({
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
  Employee._EMPLOYEES.push(this);

  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };

  this.age = function() {
    let birthday = new Date(this.birthday).getFullYear();
    let actualDate = new Date().getFullYear();
    return actualDate - birthday;
  };

  this.quit = function() {
    Employee._EMPLOYEES = Employee._EMPLOYEES.filter(el => el.id !== this.id);
  };

  this.retire() = function() {
    console.log('It was such a pleasure to work with you!');
    this.quit();
  };

  this.getFired() = function() {
    console.log('Not a big deal!');
    this.quit();
  };

  this.changeDepartment(newDepartment) = function() {
    this.department = newDepartment;
  };

  this.changePosition(newPosition) = function() {
    this.position = newPosition;
  };

  this.changeSalary(newSalary) = function() {
    this.salary = newSalary;
  };

  this.changeStatus(changes) = function() {
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
  };

  this.getPromoted(benefits) = function() {
    this.changeStatus(benefits);
    console.log('Yoohooo!');
  };

  this.getDemoted(punishment) = function() {
    this.changeStatus(punishment);
    console.log('Damn!');
  };
}

Employee._EMPLOYEES = [];

Employee.EMPLOYEES = function() {
  return Employee._EMPLOYEES;
};

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
