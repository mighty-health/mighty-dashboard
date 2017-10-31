import React, {Component} from 'react';
import './Dashboard.css';

class Navbar extends Component {
  render() {

    return (
        <nav className="navbar navbar-default navbar-fixed">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#navigation-example-2">

                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>

              <a className="navbar-brand" href="#">Health Tracker</a>
            </div>
            <div className="collapse navbar-collapse">

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="login.html">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>);
  }
}

export default Navbar