import React, { useState } from 'react';
import './App.css';
import {CSSTransition} from 'react-transition-group';

function App() {
  return (
    <NavBar>
      <NavItem icon="😊"></NavItem>
      <NavItem icon="😍"></NavItem>
      <NavItem icon="😉"></NavItem>
      <NavItem icon="🤪">
        <DropdownMenu></DropdownMenu>


      </NavItem>


    </NavBar>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition 
      in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary"
      >
        <div className="menu">
        <DropdownItem>My profile</DropdownItem>
        <DropdownItem
        leftIcon="👩‍💻"
        rightIcon="🤓"
        goToMenu="settings"> 
          Settings
        </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-secondary"
        >
          <div className="menu">
            <DropdownItem leftIcon="👈" goToMenu="main"></DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            
          </div>
      </CSSTransition>
    </div>
  );
}

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const[open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;
