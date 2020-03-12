import React from 'react';
import './MainPage.css';
import List from '../List/List';

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
  }
];

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <header className="header">
          <div className="header-wrapper">
            <p className="header-logoText">learn</p>
          </div>
        </header>
        <main className="main">
          <div className="main-wrapper">
            <List array={[...mockProps]} />
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
