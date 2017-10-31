import React, {Component} from 'react';
import './Dashboard.css';

class Sidebar extends Component {

  constructor(props) {
    super(props)


  }

  render() {

    cardListItems = this.props.cardNames.map();

    return (
        <div className="sidebar" data-color="purple">
          <div className="sidebar-wrapper">

            <div className="logo">
              <a href="#" className="simple-text" style={sidebarLogo}>
                Mighty-Health
              </a>
            </div>

            <ul className="nav nav-list nav-menu-list-style">

              <li>
                <a href="dashboard-60f.html" className="tree-toggler" data-toggle="dropdown">
                  <i className="pe-7s-graph"/>
                  <p>Health Tracker</p>
                </a>
                <ul className="nav nav-list tree">
                  {sidebarItems}
                </ul>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

const sidebarLogo = {
  fontFamily: 'Boogaloo'
};

const navListItemStyle = {
  paddingLeft: '2em'
};


export default Sidebar;