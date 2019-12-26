'use strict';

let users = [
  {
    email: 'user@gmail.com',
    password: 'UserPass'
  },
  {
    email: 'admin@gmail.com',
    password: 'AdminPass'
  }
];
let password, inputPassword, changePassword;
let minLength = 5;

let inputEmail = prompt('Enter your email');

if (inputEmail === null || inputEmail.length === 0) {
  alert('Canceled');
} else if (inputEmail.length < minLength) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (users.find(el => inputEmail === el.email)) {
  password = users.find(el => inputEmail === el.email).password;
  inputPassword = prompt('Enter your password');
  if (inputPassword === password) {
    changePassword = confirm('Do you want to change your password?');
    if (changePassword === false || changePassword === null) {
      alert('You have failed the change');
    } else if (changePassword === true) {
      inputPassword = prompt('Please, write the old password');
      if (inputPassword === password) {
        alert('Correct!');
      } else if (inputEmail === null || inputEmail.length === 0) {
        alert('Canceled');
      } else {
        alert('Wrong password');
      }
    }
  } else if (inputEmail === null || inputEmail.length === 0) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
