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
}

Employee.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Employee.prototype.age = function() {
  var birthday = new Date(this.birthday).getFullYear();
  var actualDate = new Date().getFullYear();
  return actualDate - birthday;
};

Employee.prototype.quit = function() {
  Employee._EMPLOYEES = Employee._EMPLOYEES.filter(el => el.id !== this.id);
};

Employee.prototype.retire = function() {
  console.log('It was such a pleasure to work with you!');
  this.quit();
};

Employee.prototype.getFired = function() {
  console.log('Not a big deal!');
  this.quit();
};

Employee.prototype.changeDepartment = function(newDepartment) {
  this.department = newDepartment;
};

Employee.prototype.changePosition = function(newPosition) {
  this.position = newPosition;
};

Employee.prototype.changeSalary = function(newSalary) {
  this.salary = newSalary;
};

Employee.prototype.changeStatus = function(changes) {
  var keys = Object.keys(changes);
  for (var i = 0; i < keys.length; i++) {
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

Employee.prototype.getPromoted = function(benefits) {
  this.changeStatus(benefits);
  console.log('Yoohooo!');
};

Employee.prototype.getDemoted = function(punishment) {
  this.changeStatus(punishment);
  console.log('Damn!');
};

Employee._EMPLOYEES = [];

Employee.EMPLOYEES = function() {
  return Employee._EMPLOYEES;
};

function Manager(id, firstName, lastName, birthday, salary, department) {
  Employee.call(this, id, firstName, lastName, birthday, salary, department);
  this.position = 'manager';
}

Manager.prototype.managedEmployees = function() {
  return Array.from(Employee._EMPLOYEES).filter(
    el => el.department == this.department && el.position != 'manager'
  );
};

Manager.prototype = Object.create(Employee.prototype);
Object.defineProperty(Manager.prototype, 'constructor', {
  value: Manager,
  enumerable: false,
  writable: true
});

function BlueCollarWorker(
  id,
  firstName,
  lastName,
  birthday,
  salary,
  position,
  department
) {
  Employee.call(
    this,
    id,
    firstName,
    lastName,
    birthday,
    salary,
    position,
    department
  );
}

BlueCollarWorker.prototype = Object.create(Employee.prototype);
Object.defineProperty(BlueCollarWorker.prototype, 'constructor', {
  value: BlueCollarWorker,
  enumerable: false,
  writable: true
});

function HRManager(id, firstName, lastName, birthday, salary) {
  Manager.call(this, id, firstName, lastName, birthday, salary);
  this.department = 'hr';
}

HRManager.prototype = Object.create(Manager.prototype);
Object.defineProperty(HRManager.prototype, 'constructor', {
  value: HRManager,
  enumerable: false,
  writable: true
});

function SalesManager(id, firstName, lastName, birthday, salary) {
  Manager.call(this, id, firstName, lastName, birthday, salary);
  this.department = 'sales';
}

SalesManager.prototype = Object.create(Manager.prototype);
Object.defineProperty(SalesManager.prototype, 'constructor', {
  value: SalesManager,
  enumerable: false,
  writable: true
});
