import React from 'react';
import './MainPage.css';
import List from '../List/List';
import Submit from '../Edit/Submit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

let mockProps = [
  {
    date: '18.02.2018',
    name: 'Prerequisites',
    subjects: 'Webpack, AngularCLI, TypeScript',
    time: '01h 34min',
    id: 1
  },
  {
    date: '01.02.2018',
    name: 'Components',
    subjects: 'Components, Custom component, template DSL',
    time: '01h 34min',
    id: 2
  },
  {
    date: '15.01.2018',
    name: 'Routing',
    subjects: 'Routing, CanActivate, CanDeactivate',
    time: '01h 34min',
    id: 3
  },
  {
    date: '15.01.2018',
    name: 'aaaaa',
    subjects: 'bbbbbb, ccccc, dddddd',
    time: '01h 34min',
    id: 4
  },
  {
    date: '15.01.2018',
    name: '111111',
    subjects: '2222222, 33333333, 4444444',
    time: '01h 34min',
    id: 5
  }
];

class MainPage extends React.Component {
  constructor() {
    super();

    this.addNewElement = this.addNewElement.bind(this);
    this.state = {
      array: mockProps
    };
  }

  addNewElement(object) {
    let { date, name, subjects, time } = object;

    let elementToPush = {
      date: date,
      name: name,
      subjects: subjects,
      time: time,
      id: this.RNG()
    };
    this.setState(prev => ({ array: [...prev.array, elementToPush] }));
    console.log(this.state.array);
  }

  RNG() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  render() {
    let { array } = this.state;

    return (
      <div className="MainPage">
        <header className="header">
          <div className="header-wrapper">
            <div className="header-logo"></div>
            <p className="header-logoText">learn</p>
          </div>
        </header>
        <main className="main">
          <div className="main-wrapper">
            <Router>
              <Switch>
                <Route exact path="/">
                  <List array={[...array]} />
                </Route>
                <Route path="/edit">
                  <Submit addNewElement={this.addNewElement} />
                </Route>
              </Switch>
            </Router>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-wrapper">
            <p className="footer-text">
              <span className="footer-copy">&copy;</span>
              Videocourses, All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainPage;
