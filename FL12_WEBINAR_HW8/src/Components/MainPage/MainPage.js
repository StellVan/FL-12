import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '../List/List';
import Submit from '../Edit/Submit';
import './MainPage.css';

const MainPage = function() {
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
                <List />
              </Route>
              <Route path="/add">
                <Submit header={'New course'} />
              </Route>
              <Route path={`/edit`}>
                <Submit header={'Edit course'} />
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
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MainPage);
